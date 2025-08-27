import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShoppingItemComponent } from './add-new-shopping-item.component';

describe('AddNewShoppingItemComponent', () => {
  let component: AddNewShoppingItemComponent;
  let fixture: ComponentFixture<AddNewShoppingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewShoppingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewShoppingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
