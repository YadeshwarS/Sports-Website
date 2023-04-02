import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tnsc';
  hideMe: boolean=false
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required)
  });
  get username() {
    return this.form.get('username');
  }
  toggletag(){
    this.hideMe= ! this.hideMe
  }
}
