import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselMoviesComponent } from './carrousel-movies.component';

describe('CarrouselMoviesComponent', () => {
  let component: CarrouselMoviesComponent;
  let fixture: ComponentFixture<CarrouselMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
