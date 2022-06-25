import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chamadosComponent } from './chamados.component';

describe('chamadosComponent', () => {
  let component: chamadosComponent;
  let fixture: ComponentFixture<chamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ chamadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(chamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
