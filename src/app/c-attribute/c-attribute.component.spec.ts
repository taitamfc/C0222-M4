import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAttributeComponent } from './c-attribute.component';

describe('CAttributeComponent', () => {
  let component: CAttributeComponent;
  let fixture: ComponentFixture<CAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
