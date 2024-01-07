import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/interfaces/note-interface';

@Component({
  selector: 'app-note-input-box',
  templateUrl: './note-input-box.component.html',
  styleUrls: ['./note-input-box.component.scss'],
})
export class NoteInputBoxComponent implements OnInit {
  @Input() inputNote: Note = this.data?.inputNote || {
    title: '',
    note: '',
    noteId: '',
  };
  @Output() submitNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();
  @Output() deleteNote = new EventEmitter<string>();
  @Output() closeNote = new EventEmitter();

  noteData!: FormGroup;
  isEditView = !!this.inputNote.noteId;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.noteData = new FormGroup({
      title: new FormControl(this.inputNote.title),
      note: new FormControl(this.inputNote.note),
    });
  }

  onCloseNodeInput() {
    this.closeNote.emit();
  }

  onEditNote() {
    if (this.noteData.dirty) {
      this.editNote.emit({
        noteId: this.inputNote.noteId,
        ...this.noteData.value,
      });
    }
    this.closeNote.emit();
  }

  onDeleteNote() {
    this.deleteNote.emit(this.inputNote.noteId);
  }

  onSubmit() {
    this.onCloseNodeInput();
    if (this.noteData.value.title) {
      this.submitNote.emit(this.noteData.value);
      this.noteData.setValue({ title: '', note: '' });
    }
  }
}
