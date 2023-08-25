import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: Array<{ id: string, comida: string, preco: string }> = [
    { id: 'x_salada', comida: 'X-Salada', preco: 'R$10,00' },
    { id: 'x_bacon', comida: 'X-Bacon', preco: 'R$11,00' },
    { id: 'x_burguer', comida: 'X-Burguer', preco: 'R$12,00' }
  ]
}
