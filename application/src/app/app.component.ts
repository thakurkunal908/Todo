import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note-interface';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];

  isAddNote: boolean = false;

  ngOnInit(): void {
    this.fetchNotes();
  }

  constructor(private readonly notesService: NotesService) {}

  fetchNotes() {
    this.notes = this.notesService.fetchAllNotes();
  }

  onSubmitNote(note: Note) {
    this.notesService.createNote(note);
    this.fetchNotes();
  }

  onCloseNote() {
    this.isAddNote = false;
  }

  onAddNote() {
    this.isAddNote = true;
  }
}
