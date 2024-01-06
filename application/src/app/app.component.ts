import { Component } from '@angular/core';
import { Note } from './interfaces/note-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  notes: Note = {
    title: 'My First Note',
    note: 'Lorem Ipusm dollar',
  };

  onSubmitNote(note: Note) {
    console.log(note);
  }
}
