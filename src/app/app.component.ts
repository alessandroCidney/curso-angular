import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Título Customizado"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor () {
    console.log('constructor')
  }

  ngOnInit(): void {
    setTimeout(() => console.log('on init'), 5000)
  }
}
