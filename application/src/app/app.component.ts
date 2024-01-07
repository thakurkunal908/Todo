import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Note } from './interfaces/note-interface';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('dialogContainer', { read: ViewContainerRef })
  dialogContainer!: ViewContainerRef;

  noteList: Note[] = [];

  isAddNote: boolean = false;

  showDialog = false;

  selectedNote!: Note;

  ngOnInit(): void {
    this.fetchNotes();
  }

  constructor(private readonly notesService: NotesService) {}

  fetchNotes() {
    this.noteList = this.notesService.fetchAllNotes()?.reverse();
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

  onSelectNote(selectedNote: Note) {
    this.showDialog = true;
    this.selectedNote = selectedNote;
  }

  onCloseModal() {
    this.showDialog = false;
  }
}
