import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-certi',
  templateUrl: './certi.component.html',
  styleUrls: ['./certi.component.css']
})
export class CertiComponent implements OnInit {

  constructor(private auth: AuthService,) { }

  ngOnInit(): void {
    
  
  
}
}
