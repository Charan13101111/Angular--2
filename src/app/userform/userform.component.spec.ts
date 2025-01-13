import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userformcomponent} from './userform.component';

describe('UserformComponent', () => {
  let component: userformcomponent;
  let fixture: ComponentFixture<userformcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userformcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userformcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
