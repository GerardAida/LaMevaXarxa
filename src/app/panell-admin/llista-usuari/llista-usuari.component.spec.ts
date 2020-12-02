import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaUsuariComponent } from './llista-usuari.component';

describe('LlistaUsuariComponent', () => {
  let component: LlistaUsuariComponent;
  let fixture: ComponentFixture<LlistaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaUsuariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
