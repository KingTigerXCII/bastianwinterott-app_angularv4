import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BastianwinterottAppComponent } from './bastianwinterott-app.component';

describe('BastianwinterottAppComponent', () => {
  let component: BastianwinterottAppComponent;
  let fixture: ComponentFixture<BastianwinterottAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BastianwinterottAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BastianwinterottAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
