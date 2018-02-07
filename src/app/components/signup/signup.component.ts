import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string = "test@gmail.com"
  password:string = "test"

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.NewSignup(
      form.value.email,
      form.value.password
    );
  }

  NewSignup(email, password)  {
    console.log(email)
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error.code)
  console.log(error.message)
  // ...
});
  }

}
