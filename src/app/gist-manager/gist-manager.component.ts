import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GistService} from '@core/services/gist.service';

@Component({
  selector: 'app-gist-manager',
  templateUrl: './gist-manager.component.html',
  styleUrls: ['./gist-manager.component.scss']
})
export class GistManagerComponent implements OnInit {
  gistForm: FormGroup;

  constructor(private fb: FormBuilder,
              private gistService: GistService) {

  }

  ngOnInit() {
    this.gistForm = this.fb.group({
      notepadTitle: ['', [Validators.required, Validators.maxLength(255)]],
      title: ['', [Validators.required, Validators.maxLength(255)]],
      note: ['', [Validators.required, Validators.maxLength(1000)]],
      notes: this.fb.array([])
    });

    const gist: any = JSON.parse(localStorage.getItem('gists'));
    if (gist) {
      const notes = this.parseFromFiles(gist.files);
      this.gistForm.patchValue({
        notepadTitle: gist.description
      });
      notes.map((note) => {
        this.notes.push(this.createNote(note));
      });
    }

  }

  createNote({title, note, uuid = null}): FormGroup {
    return this.fb.group({
      title: [title, [Validators.required, Validators.maxLength(255)]],
      note: [note, [Validators.required, Validators.maxLength(1000)]],
      uuid: [uuid]
    });
  }

  /**
   * add item to notes list and mark input fields as untouched
   */
  addItem(): void {
    if (this.gistForm.valid) {
      const {title, note} = this.gistForm.getRawValue();
      const item = {
        title,
        note
      };
      this.notes.push(this.createNote(item));
      this.gistForm.patchValue({
        title: '',
        note: ''
      });
      this.gistForm.get('title').markAsUntouched();
      this.gistForm.get('note').markAsUntouched();
    } else {
      this.gistForm.markAllAsTouched();
      this.gistForm.updateValueAndValidity({onlySelf: true});
    }
  }

  deleteNote(index, key) {
    this.findFileAndRemoveFromMemo(key);
    this.notes.removeAt(index);
  }

  deleteAllNotes() {
    while (this.notes.length !== 0) {
      this.notes.removeAt(0);
    }
    localStorage.removeItem('gists');
  }

  saveNotes() {
    if (this.notes.length >= 1) {
      if (this.notes.valid) {
        const notes = this.notes.getRawValue();
        const {notepadTitle} = this.gistForm.getRawValue();
        const files = this.parseToFiles(notes);
        const data = {
          description: notepadTitle,
          files
        };
        this.gistService.createGist(data).subscribe((gist) => {
          localStorage.setItem('gists', JSON.stringify(gist));
        });
      } else {
        this.gistForm.markAllAsTouched();
      }
    }
  }


  get notes(): FormArray {
    return this.gistForm.get('notes') as FormArray;
  }

  private parseToFiles(notes: any[]): any {
    const files = {};
    notes.forEach(({title, note}) => {
      files[title] = {
        content: note
      };
    });
    return files;
  }

  /**
   * parse from files to notes
   */
  parseFromFiles(files: object) {
    const keys = Object.keys(files);
    return keys.map((key: string) => {
      return {
        title: files[key].filename,
        note: files[key].content
      };
    });
  }

  findFileAndRemoveFromMemo(key) {
    const gist = JSON.parse(localStorage.getItem('gists'));
    if (gist) {
      delete gist.files[key];
    }
    localStorage.setItem('gists', JSON.stringify(gist));

  }
}
