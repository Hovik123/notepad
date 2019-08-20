import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistManagerRoutingModule } from './gist-manager-routing.module';
import { GistManagerComponent } from './gist-manager.component';
import { NoteItemComponent } from './note-item/note-item.component';


@NgModule({
  declarations: [GistManagerComponent, NoteItemComponent],
  imports: [
    CommonModule,
    GistManagerRoutingModule
  ]
})
export class GistManagerModule { }
