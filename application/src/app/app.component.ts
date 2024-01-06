import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note-interface';
import { NotesService } from './service/notes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    notes: Note[] = [{
        title: 'My First Note',
        note: 'Lorem Ipusm dollar',
    },
    {
        title: 'My second Note',
        note: 'Lorem Ipusm dollar',
    }];

    ngOnInit(): void {
        this.fetchNotes();
    }

    constructor(private readonly notesService: NotesService) { }

    fetchNotes() {
        this.notes = this.notesService.fetchAllNotes();
    }

    onSubmitNote(note: Note) {
        console.log(note);
    }
}
