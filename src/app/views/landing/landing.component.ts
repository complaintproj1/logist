import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  
})
export class LandingComponent implements OnInit {
  length: number;
  breadth: number;
  height: number;
  multiplier: number;
  estimateResult: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  calculateEstimate(): void {
    const lengthInput = document.getElementById('length') as HTMLInputElement;
    const breadthInput = document.getElementById('breadth') as HTMLInputElement;
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const multiplierInput = document.getElementById('multiplier') as HTMLSelectElement;

    const lengthValue = lengthInput.valueAsNumber;
    const breadthValue = breadthInput.valueAsNumber;
    const heightValue = heightInput.valueAsNumber;
    const multiplierValue = Number(multiplierInput.value);

    if (this.isValidInput(lengthValue, breadthValue, heightValue)) {
      const volume = (lengthValue * breadthValue * heightValue) / 1728;
      const weight = Math.max(volume, this.calculateMeasuredWeight());
      const finalWeight = weight * multiplierValue;

      this.estimateResult = isNaN(finalWeight) ? 0 : finalWeight;
    } else {
      this.estimateResult = NaN;
    }
  }

  calculateMeasuredWeight(): number {
    // Logic to calculate the measured weight
    // Implement your own logic or use a predefined formula
    // For example, you can prompt the user to enter the measured weight or calculate it based on other factors
    return 0; // Replace with your actual calculated weight
  }

  isValidInput(length: number, breadth: number, height: number): boolean {
    return (
      typeof length === 'number' &&
      typeof breadth === 'number' &&
      typeof height === 'number' &&
      !isNaN(length) &&
      !isNaN(breadth) &&
      !isNaN(height)
    );
    // Add your validation logic here if needed
    return true;
  }

  scrollToBookingSection() {
    const bookingSection = this.elementRef.nativeElement.querySelector('#bookingSection');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToBookSection() {
    const bookingSection = this.elementRef.nativeElement.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  scrollToLookSection() {
    const bookingSection = this.elementRef.nativeElement.querySelector('#look');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
