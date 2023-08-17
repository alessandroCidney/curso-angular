import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true
  public altura: string = '20px'

  public model1: string = ''

  public model1List: Record<string, string>[] = [{ name: 'Teste 01' }]

  public disableDivsCheckbox: boolean = false

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
      this.altura = this.altura === '20px' ? '50px' : '20px'
    }, 2000)
  }

  saveModel1(): void {
    this.model1List.push({ name: this.model1 })
    this.model1 = ''
  }
}
