import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionMision } from './vision-mision';

describe('VisionMision', () => {
  let component: VisionMision;
  let fixture: ComponentFixture<VisionMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionMision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionMision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
