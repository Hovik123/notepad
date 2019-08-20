import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistManagerComponent } from './gist-manager.component';

describe('GistManagerComponent', () => {
  let component: GistManagerComponent;
  let fixture: ComponentFixture<GistManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
