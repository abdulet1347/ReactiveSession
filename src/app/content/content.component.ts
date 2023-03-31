import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { reduce } from 'rxjs';
import { __values } from 'tslib';
import * as M from "materialize-css";
import { event } from 'jquery';
import { trigger,state,style,transition,animate } from '@angular/animations';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations:[
    trigger('myanim',[
      state('Enter',style({
        height:'10px'
      })),
    transition('void => Enter',[
      style({
       height:'0px'
      }),
      animate(
        '2.5s',
        style({
          height:'200px'
        }),
      )
    ]),
    transition('Enter => void',[
      animate(
        '2.1s',
        style({
          height:'100px'
        }),
      )
    ])
  ])
  ]
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: true }) elmodalpop: ElementRef;
  popup: any
  show:boolean=true;
 
  constructor() { }


  hello = "Hello"
  className = "head"
  count = 'Your Name'
  exp = '!'
  LabName = 'label'
  white: any = 'white'
 

  // image detail list
  sample = [
    { name: "samp1", age: 22 },
    { name: "samp2", age: 23 },
    { name: "samp3", age: 24 },
    { name: "samp4", age: 25 }

  ]
  ngOnInit(): void { }

  // event binding 
  printName(event: any) {
    this.count = event.target.value;
  }
  // popup
  ngAfterViewInit() {
    this.popup = new M.Modal(this.elmodalpop.nativeElement, { dismissible: false });
  }
  // popup open function
  popupopen() {
    this.popup.open();
  }
  // popup close function
  popupclose() {
    this.popup.close();
  }

  anim(){
   this.show=!this.show;
}
}