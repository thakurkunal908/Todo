import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { Note } from '../../interfaces/note-interface';
import { NotesService } from 'src/app/service/notes.service';
import { NoteInputBoxComponent } from '../note-input-box/note-input-box.component';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() noteId = '';
  @Input() title = '';
  @Input() note = '';
  @Output() cardClick = new EventEmitter<Note>();
  @Output() cardOptionClick = new EventEmitter();

  constructor(private readonly noteService: NotesService) {}

  protected cardClickHandler() {
    this.cardClick.emit({
      title: this.title,
      note: this.note,
      noteId: this.noteId,
    });
  }

  protected optionClickHandler() {
    this.cardOptionClick.emit();
  }
}
