import { Component } from '@angular/core'

@Component({
  selector: 'converter',
  templateUrl: 'converter.component.html',
  styleUrls: ['converter.component.scss']
})
export class ConverterComponent {
  type = 'inverse';
  initialAmount: string = 'Type in amount and select currency:';
  ConvertedAmount: string = 'Converted amount';


  private types: string[] = ['default', 'shade', 'inverse'];

  change() {
    this.type = this.types[(this.types.indexOf(this.type) + 1) % 3];
  }
}

