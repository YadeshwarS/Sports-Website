import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
email : string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  forgotpass(){
  this.auth.forgotpass(this.email);
  this.email='';
}
}
