import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistChartComponent } from './gist-chart.component';

describe('GistChartComponent', () => {
  let component: GistChartComponent;
  let fixture: ComponentFixture<GistChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
