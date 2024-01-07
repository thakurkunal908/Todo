import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/interfaces/note-interface';

@Component({
  selector: 'app-note-input-box',
  templateUrl: './note-input-box.component.html',
  styleUrls: ['./note-input-box.component.scss'],
})
export class NoteInputBoxComponent {
  @Input() inputNote: Note = { title: '', note: '' };
  @Output() submitNote = new EventEmitter<Note>();
  @Output() closeNote = new EventEmitter();

  noteData!: FormGroup;

  ngOnInit() {
    this.noteData = new FormGroup({
      title: new FormControl(this.inputNote.title),
      note: new FormControl(this.inputNote.note),
    });
  }

  onCloseNodeInput() {
    this.closeNote.emit();
  }

  onSubmit() {
    if (this.noteData.value.title) {
      this.submitNote.emit(this.noteData.value);
    }
  }
}
