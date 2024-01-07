import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/interfaces/note-interface';

@Component({
  selector: 'app-note-input-box',
  templateUrl: './note-input-box.component.html',
  styleUrls: ['./note-input-box.component.scss'],
})
export class NoteInputBoxComponent implements OnChanges, OnInit {
  @Input() inputNote: Note = this.data?.inputNote || { title: '', note: '' };
  @Output() submitNote = new EventEmitter<Note>();
  @Output() closeNote = new EventEmitter();

  noteData!: FormGroup;
  isEditAllowed: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnChanges(): void {
    this.isEditAllowed = true;
  }

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
    this.onCloseNodeInput();
    if (this.noteData.value.title) {
      this.submitNote.emit(this.noteData.value);
    }
  }
}
