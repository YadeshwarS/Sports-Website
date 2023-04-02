import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isHidden: boolean = true;
  public show:boolean = true;
  public buttonName:any = 'Show';
  constructor( private auth : AuthService) { }

  ngOnInit(): void {
    console.log(this.show);
  }
  toggle() {
    this.show = !this.show;
  }
}


