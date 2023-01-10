import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVistoComponent } from './mas-visto.component';

describe('MasVistoComponent', () => {
  let component: MasVistoComponent;
  let fixture: ComponentFixture<MasVistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVistoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasVistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
