import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContComponent } from './gallery-cont.component';

describe('GalleryContComponent', () => {
  let component: GalleryContComponent;
  let fixture: ComponentFixture<GalleryContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
