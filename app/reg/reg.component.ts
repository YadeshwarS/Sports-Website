import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  email: string='';
  password: string='';
  username: string='';
  number: any='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
    reg(){
      if(this.username ==''){
        alert('please enter username');
        return;

       }
       if(this.number == ''){
        alert('please enter mobile number');
        return;

       }
      if(this.email == ''){
        alert('please enter email');
        return;

       }
    
       if(this.password == '') {
        alert('please enter password');
        return;
       }
     
    
       this.auth.reg(this.email,this.password);
       this.email='';
       this.password = '';
       this.username= '';
       this.number='';
    }
}