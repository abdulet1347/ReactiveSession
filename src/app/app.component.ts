import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
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
export class AppComponent implements OnInit {
 
  ngOnInit(): void {
    this.iaCount();
  }
  re = ['0'];
  reNum: number;
  iaCount() {
    this.reNum = this.re.length;
  }
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
