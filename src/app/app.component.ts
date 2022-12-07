import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-model *ngIf="false"></app-model>

    <app-data-binding></app-data-binding>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {  
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
