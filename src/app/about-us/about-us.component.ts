import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
   

  }

   test(){
    console.log('hamide');
  }
  

}

