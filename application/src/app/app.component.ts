import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note-interface';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notes: Note[] = [
    {
      title: 'Note 1',
      note: 'Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some text for note 1Some text for note 1Some text for note 1',
    },
    {
      title: 'Note 2',
      note: 'Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some',
    },
    {
      title: 'Note 3',
      note: 'Some text for note 1 Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some',
    },
    {
      title: 'Note 4',
      note: 'Some text for note 1',
    },
    {
      title: 'Note 5',
      note: 'Some text for note 1 Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some Some text for note 1 Some text for note 1Some text for note 1Some text for note 1Some',
    },
    {
      title: 'Note 6',
      note: 'Some text for note 1',
    },
    {
      title: 'Note 7',
      note: 'Some text for note 1',
    },
    {
      title: 'Note 8',
      note: 'Some text for note 1',
    },
  ];

  isAddNote: boolean = false;

  ngOnInit(): void {
    this.fetchNotes();
  }

  constructor(private readonly notesService: NotesService) {}

  fetchNotes() {
    this.notes = this.notes;
  }

  onSubmitNote(note: Note) {
    console.log(note);
  }

  onCloseNote() {
    this.isAddNote = false;
  }

  onAddNote() {
    this.isAddNote = true;
  }
}
