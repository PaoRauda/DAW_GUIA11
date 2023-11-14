import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumDetailComponent } from './scrum-detail.component';

describe('ScrumDetailComponent', () => {
  let component: ScrumDetailComponent;
  let fixture: ComponentFixture<ScrumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
