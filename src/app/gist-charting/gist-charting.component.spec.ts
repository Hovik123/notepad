import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistChartingComponent } from './gist-charting.component';

describe('GistChartingComponent', () => {
  let component: GistChartingComponent;
  let fixture: ComponentFixture<GistChartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistChartingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
