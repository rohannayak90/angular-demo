import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsEditorComponent } from './user-details-editor.component';

describe('UserDetailsEditorComponent', () => {
  let component: UserDetailsEditorComponent;
  let fixture: ComponentFixture<UserDetailsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
