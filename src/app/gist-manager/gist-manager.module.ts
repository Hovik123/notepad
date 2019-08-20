import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistManagerRoutingModule } from './gist-manager-routing.module';
import { GistManagerComponent } from './gist-manager.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [GistManagerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GistManagerRoutingModule
  ]
})
export class GistManagerModule { }
