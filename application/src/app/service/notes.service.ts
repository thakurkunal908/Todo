import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note-interface';

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    constructor() { }

    fetchAllNotes(): Note[] | [] {
        return JSON.parse(localStorage.getItem('notes')!) || [];
    }
}
