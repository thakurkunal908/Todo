import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

import { Note } from '../interfaces/note-interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  localStorageKey = 'notes-app';

  constructor() {}

  createNote(note: Note): void {
    const notes: { [key: string]: Note }[] = this.fetchAllNotes();
    notes.push({ [uuid.v4()]: note });
    this.saveNotes(notes);
  }

  fetchAllNotes(): { [key: string]: Note }[] | [] {
    return JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
  }

  private saveNotes(notes: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
  }

  editNote(id: string, updatedNote: Note) {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(this.localStorageKey)!),
        ...{ noteId: id, title: updatedNote.title, note: updatedNote.note },
      })
    );
  }
}
