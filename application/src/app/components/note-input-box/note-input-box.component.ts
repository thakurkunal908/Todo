import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/interfaces/note-interface';

@Component({
  selector: 'app-note-input-box',
  templateUrl: './note-input-box.component.html',
  styleUrls: ['./note-input-box.component.scss'],
})
export class NoteInputBoxComponent implements OnChanges, OnInit {
  @Input() inputNote: Note = { title: '', note: '' };
  @Output() submitNote = new EventEmitter<Note>();
  @Output() closeNote = new EventEmitter();

  noteData!: FormGroup;
  isEditAllowed: boolean = false;

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
