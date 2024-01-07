import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  @Output() addNote = new EventEmitter();

  onClickHanlder() {
    this.addNote.emit();
  }
}
