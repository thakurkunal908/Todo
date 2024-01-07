import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './components/note/note.component';
import { MatCardModule } from '@angular/material/card';
import { CardAppearanceDirective } from './directives/card-appearance.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoteInputBoxComponent } from './components/note-input-box/note-input-box.component';
import { AutoGrowInputDirective } from './directives/auto-grow-input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { LimitViewContentPipe } from './pipes/limit-view-content.pipe';
import { AddNoteComponent } from './components/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    CardAppearanceDirective,
    NoteInputBoxComponent,
    AutoGrowInputDirective,
    LimitViewContentPipe,
    AddNoteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
