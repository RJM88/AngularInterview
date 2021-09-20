import { FormsModule } from '@angular/forms';
import { CompanyPipe } from './../../pipes/company.pipe';
import { ColorPipe } from './../../pipes/color.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntervieweeComponent } from './interviewee.component';

describe('IntervieweeComponent', () => {
  let component: IntervieweeComponent;
  let fixture: ComponentFixture<IntervieweeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ IntervieweeComponent, ColorPipe, CompanyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervieweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
