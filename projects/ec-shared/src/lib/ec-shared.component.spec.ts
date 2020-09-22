import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSharedComponent } from './ec-shared.component';

describe('EcSharedComponent', () => {
  let component: EcSharedComponent;
  let fixture: ComponentFixture<EcSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
