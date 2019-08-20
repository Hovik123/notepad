import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gist-manager',
  templateUrl: './gist-manager.component.html',
  styleUrls: ['./gist-manager.component.scss']
})
export class GistManagerComponent implements OnInit {
  gistForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.gistForm = this.fb.group({
      notepadTitle: ['', [Validators.required, Validators.maxLength(255)]],
      title: ['', [Validators.required, Validators.maxLength(255)]],
      note: ['', [Validators.required, Validators.maxLength(1000)]],
      notes: this.fb.array([])
    });
  }

  createNote({title, note}): FormGroup {
    return this.fb.group({
      title: [title, [Validators.required, Validators.maxLength(255)]],
      note: [note, [Validators.required, Validators.maxLength(1000)]]
    });
  }

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

  deleteNote(index) {
    this.notes.removeAt(index);
  }

  deleteAllNotes() {
    while (this.notes.length !== 0) {
      this.notes.removeAt(0);
    }
  }

  saveNotes() {
    if (this.notes.length >= 1) {
      if (this.notes.valid) {
        alert('not yet implemented');
        // TODO: add save logic
      } else {
        this.gistForm.markAllAsTouched();
      }
    }
  }


  get notes(): FormArray {
    return this.gistForm.get('notes') as FormArray;
  }
}
