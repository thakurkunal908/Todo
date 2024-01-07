import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../interfaces/note-interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() title = '';
  @Input() note = '';
  @Output() cardClick = new EventEmitter<Note>();
  @Output() cardOptionClick = new EventEmitter();

  protected cardClickHandler() {
    this.cardClick.emit({ title: this.title, note: this.note });
  }

  protected optionClickHandler() {
    this.cardOptionClick.emit();
  }
}
