import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigitaleIconsComponent } from './tigitale-icons.component';

describe('TigitaleIconsComponent', () => {
  let component: TigitaleIconsComponent;
  let fixture: ComponentFixture<TigitaleIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigitaleIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigitaleIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
