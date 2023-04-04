import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger,keyframes, state } from '@angular/animations';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('visible',[
      transition(':enter',[         // void => *
       style({transform:'translateY(100%)',opacity:'0'}),
        animate('3s ease',keyframes([
          style({opacity:"0"}),
          style({opacity:"0"}),
          style({opacity:"0.2",transform:'translateY(0%)'}),
          style({opacity:"0.4"}),
          style({opacity:"0.8"}),
         style({opacity:"1"}),
        ]))
      ])
    ])    
  ]
})
export class AppComponent implements OnInit {
 
  ngOnInit(): void {
    this.iaCount();
  }
  re = ['0'];
  reNum: number;
  iaCount() {
    this.reNum = this.re.length;
  }

  loginPage:boolean=true;
  doneImg:boolean=false;

  form = new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, this.validateUsername]
    ),
    password: new FormControl('',
      [Validators.required, this.validatePassword])
  });

  validateUsername(user: AbstractControl): ValidationErrors | null {
    if (user.value.toString().startsWith('a') || user.value.toString().startsWith('A') || user.value.toString().endsWith('k')) {
      return { invalid: true };
    } else {
      return null;
    }
  }

  validatePassword(password: AbstractControl): ValidationErrors | null {
    if (password.value?.length < 8) {
      return { invalid: true };
    } else {
      return null;
    }
  }
  submitBtn(){
    this.loginPage=false;
    this.doneImg=true;
  }
  moveable() {
    const move = document.getElementById('movableBtn');
    if (this.form.invalid) {
      this.reNum++;
      if (this.reNum % 2 == 0) {
        move.style.transform = 'translateX(213%)';
      } else if (this.reNum % 2 == 1) {
        move.style.transform = 'translateX(-213%)';
      }
    }
  }
}
