import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInputBoxComponent } from './note-input-box.component';

describe('NoteInputBoxComponent', () => {
  let component: NoteInputBoxComponent;
  let fixture: ComponentFixture<NoteInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteInputBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
