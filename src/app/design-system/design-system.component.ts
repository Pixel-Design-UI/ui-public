import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent implements OnInit {
  public whiteTheme: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  public toggleDarkTheme() {
    document.body.classList.add('dark-theme');
    this.whiteTheme = false;
  }

  public toggleWhiteTheme() {
    document.body.classList.remove('dark-theme');
    this.whiteTheme = true;
  }
}
