import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktContComponent } from './kontakt-cont.component';

describe('KontaktContComponent', () => {
  let component: KontaktContComponent;
  let fixture: ComponentFixture<KontaktContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
