import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true

  public list: { nome: string, idade: number }[] = [
    { nome: 'Felipe', idade: 25 },
    { nome: 'Ana', idade: 20 },
  ]
  
  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick (): void {
    this.conditionClick = !this.conditionClick
  }

  public onClickAddList (): void {
    this.list.push({
      nome: 'Júlia',
      idade: 27,
    })
  }

  public onClickEventList (index: number): void {
    this.list.splice(index, 1)
  }
}
