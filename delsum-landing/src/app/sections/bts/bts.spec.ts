import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bts } from './bts';

describe('Bts', () => {
  let component: Bts;
  let fixture: ComponentFixture<Bts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
