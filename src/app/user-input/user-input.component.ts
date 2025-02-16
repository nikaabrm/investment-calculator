import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

 @Output() calculate = new EventEmitter<{
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}>();


  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';


  onFormSubmit(){
    console.log('submitted')
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
    })
  }

}
