import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
homeheader:Boolean=true
userheader:Boolean=false
adminheader:Boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
