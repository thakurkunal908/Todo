import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

import { Note } from '../interfaces/note-interface';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  localStorageKey = 'notes-app';

  constructor() {}

  createNote(note: Note): void {
    const notes: Note[] = this.fetchAllNotes();
    note.noteId = uuid.v4();
    notes.push(note);
    this.saveNotes(notes);
  }

  fetchAllNotes(): Note[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
  }

  private saveNotes(notes: Note[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
  }

  editNote(updatedNote: Note) {
    const notes = this.fetchAllNotes();
    notes.forEach((note) => {
      if (note.noteId === updatedNote.noteId) {
        note.title = updatedNote.title;
        note.note = updatedNote.note;
      }
    });
    this.saveNotes(notes);
  }

  deleteNote(noteId: string) {
    const notes = this.fetchAllNotes();
    const upDatedNoteList = notes.filter((note) => note.noteId !== noteId);
    this.saveNotes(upDatedNoteList);
  }
}
