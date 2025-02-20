import { Component, output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private InvestmentService : InvestmentService){



  }


  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');


  onFormSubmit(){
    this.InvestmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
  });

    console.log('submitted')
  
    this.initialInvestment.set('0');
    this.duration.set('0');
    this.expectedReturn.set('0');
    this.annualInvestment.set('0');


  }

}
