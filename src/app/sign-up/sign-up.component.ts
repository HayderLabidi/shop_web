import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  signupform!: FormGroup
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

// creation
signup(){
  this.http.post<any>("http://localhost:3000/signup",this.signupform.value).subscribe(res=>{
  alert("student registred sucessfully");
  this.signupform.reset();
  this.router.navigate(['login'])
    },err=>{
      alert("something went wrong");
    })
      }
 
}
