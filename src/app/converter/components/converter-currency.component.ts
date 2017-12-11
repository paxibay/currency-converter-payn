import { Component, Input } from '@angular/core'

@Component({
  selector: 'converter-currency',
  templateUrl: 'converter-currency.component.html',
  styleUrls: ['converter-currency.component.scss']
})
export class ConverterCurrencyComponent {
  @Input('label')
  titleLabel: string = 'ssss';
}

