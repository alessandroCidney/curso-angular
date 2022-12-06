import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    
    <app-title *ngIf="renderizar" title="Título"></app-title>
    <button (click)="destruirTitulo()">Destruir título</button>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor:number = 1
  public renderizar:boolean = true

  public adicionar ():number {
    return this.valor += 1
  }

  public destruirTitulo (): void {
    this.renderizar = false
  }
  
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
}
