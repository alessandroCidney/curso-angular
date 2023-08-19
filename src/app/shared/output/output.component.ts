import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter()

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Nome 1', idade: 29 },
    { nome: 'Nome 2', idade: 31 },
    { nome: 'Nome 3', idade: 58 },
  ]

  public getDados (event: number) {
    this.enviarDados.emit(this.list[event])
  }
}
