import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing-component';
  @ViewChild('rangeValue', { static: true }) rangeValue: ElementRef;
  @ViewChild('yearlyBill', { static: true }) yearlyBill: ElementRef;
  reCalcPrice(){
    this.calPageViews();
    this.calCost();
  }

  calPageViews(){
    switch(this.rangeValue.nativeElement.value){
      case('1'):
      {
        return "10K"
      }
      case('2'):
      {
        return "50K"
      }
      case('3'):
      {
        return "100K"
      }
      case('4'):
      {
        return "500K"
      }
      case('5'):
      {
        return "1M"
      }
    }
  }
  calCost()
  {
    switch(this.rangeValue.nativeElement.value){
      case('1'):
      {
        if(this.yearlyBill.nativeElement.checked)
        {
          return "$6.00";
        }
        else 
        {
          return "$8.00";
        }
      }
      case('2'):
      {
        if(this.yearlyBill.nativeElement.checked)
        {
          return "$9.00";
        }
        else 
        {
          return "$12.00";
        }
      }
      case('3'):
      {
        if(this.yearlyBill.nativeElement.checked)
        {
          return "$12.00";
        }
        else 
        {
          return "$16.00";
        }
      }
      case('4'):
      {
        if(this.yearlyBill.nativeElement.checked)
        {
          return "$18.00";
        }
        else 
        {
          return "$24.00";
        }
      }
      case('5'):
      {
        if(this.yearlyBill.nativeElement.checked)
        {
          return "$27.00";
        }
        else 
        {
          return "$36.00";
        }
      }
    }  
  }
}
