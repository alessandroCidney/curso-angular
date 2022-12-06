import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = "Bem vindo!!!";

  constructor () { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes')
  }

  ngOnDestroy(): void {
    console.log('o título foi destruído')
  }
}
