import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Pedro"
  public idade: number = 20
  public checkedDisabled: boolean = true

  public imgSrc: string = 'https://github.com/alessandroCidney.png'
  public imgTitle: string = 'Property Binding'

  public position: { x: number, y:number } = { x: 0, y: 0 }

  constructor () {}

  ngOnInit (): void {}

  public alertaInfo (valor: MouseEvent): void {
    console.log(valor)
  }

  public mouseMoveTest (event: MouseEvent): void {
    // console.log(event)
    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }
}
