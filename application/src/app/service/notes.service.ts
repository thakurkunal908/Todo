import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note-interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  localStorageKey = 'notes-app';

  constructor() {}

  createNote(note: Note): void {
    const notes: Note[] = this.fetchAllNotes();
    notes.push(note);
    this.saveNotes(notes);
  }

  fetchAllNotes(): Note[] | [] {
    return JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
  }

  private saveNotes(notes: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
  }
}
