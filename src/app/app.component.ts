import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Neste app é possível renderizar cada componente de cada aula descomentando as linhas no componente app.</p>
    <!-- 
      <app-model *ngIf="false"></app-model>

      <app-data-binding></app-data-binding>
    -->

    <!--
      <app-diretivas-estruturais></app-diretivas-estruturais>
    -->

    <!--
      <app-diretivas-atributos>
        <h1>Aulas de Diretivas Atributo</h1>
        <h3>Inserindo um h3 via ng-content</h3>
      </app-diretivas-atributos>

      <app-diretivas-atributos>
        <h1>ng-content funciona mais ou menos como um slot do Vue.js</h1>
      </app-diretivas-atributos>
    -->

    <!--
      <app-diretivas-atributos>
        <h1>Aulas de Diretivas Atributo</h1>
        <h3>Inserindo um h3 via ng-content</h3>
      </app-diretivas-atributos>

      <app-new-component></app-new-component>

      <app-input [contador]="addValue"></app-input>
      <br />
      <button (click)="add()">Add</button>

      <ng-template [ngIf]="getDados">
        <h1>{{ getDados.nome }}</h1>
        <h2>{{ getDados.idade }}</h2>
      </ng-template>

      <app-output (enviarDados)="setDados($event)"></app-output>
    -->

    <app-food-add></app-food-add>
    <app-food-list></app-food-list>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {  
  public addValue: number = 0

  public getDados: { nome: string, idade: number } | undefined
  
  constructor () {
    console.log('constructor')
  }

  ngOnInit(): void {
    setTimeout(() => console.log('on init'), 5000)
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterContentInit(): void {
    console.log('content init')
  }

  ngAfterContentChecked(): void {
    console.log('content checked')
  }

  ngAfterViewInit(): void {
    console.log('view init')
  }

  ngAfterViewChecked(): void {
    console.log('view checked')
  }

  public add () {
    this.addValue++
  }

  public setDados (event: { nome: string, idade: number }) {
    this.getDados = event
  }
}
