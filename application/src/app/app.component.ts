import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note-interface';
import { NotesService } from './service/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteInputBoxComponent } from './components/note-input-box/note-input-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  noteList: Note[] = [];

  ngOnInit(): void {
    this.fetchNotes();
  }

  constructor(
    private readonly notesService: NotesService,
    public dialog: MatDialog
  ) {}

  fetchNotes() {
    this.noteList = this.notesService.fetchAllNotes().reverse();
  }

  onSubmitNote(note: Note) {
    if (note.noteId) {
      return;
    }
    this.notesService.createNote(note);
    this.fetchNotes();
  }

  openEditNodeDialog(selectedNote: Note) {
    let dialogRef = this.dialog.open(NoteInputBoxComponent, {
      width: '600px',
      maxHeight: '100vh',
      data: {
        inputNote: {
          title: selectedNote.title,
          note: selectedNote.note,
          noteId: selectedNote.noteId,
        },
      },
    });
    const closeSubscription = dialogRef.componentInstance.closeNote.subscribe(
      () => {
        dialogRef.close();
        closeSubscription.unsubscribe();
      }
    );
    const editSubscription = dialogRef.componentInstance.editNote.subscribe(
      (note: Note) => {
        this.notesService.editNote(note);
        dialogRef.close();
        this.fetchNotes();
        editSubscription.unsubscribe();
      }
    );
    const deleteSubscription = dialogRef.componentInstance.deleteNote.subscribe(
      (noteId: string) => {
        this.notesService.deleteNote(noteId);
        dialogRef.close();
        this.fetchNotes();
        deleteSubscription.unsubscribe();
      }
    );
  }
}
