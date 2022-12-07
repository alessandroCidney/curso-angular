import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  public valor:number = 1
  public renderizar:boolean = true

  public model:string = ''

  public adicionar ():number {
    return this.valor += 1
  }

  public destruirTitulo (): void {
    this.renderizar = false
  }
}
