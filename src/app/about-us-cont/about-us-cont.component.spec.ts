import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContComponent } from './about-us-cont.component';

describe('AboutUsContComponent', () => {
  let component: AboutUsContComponent;
  let fixture: ComponentFixture<AboutUsContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
