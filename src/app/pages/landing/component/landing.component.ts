import { GlobalService } from '../../../shared/services/global.service';  
import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import {NgFor} from '@angular/common';
import 'rxjs/add/operator/takeWhile';
import {Router} from '@angular/router'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'GE-Angular-POC';
  article1 = new Array;
  dsj: any[];
  header: any;
  arr = new Array;  
  leftPannelList = ["X-Ray","CT-Scan","Machine1","Machine2","Machine3","Machine4","Machine5","Machine6","Machine7","Machine8","Machine9","Machine10"];
  LeftPannelButton = ["Sub-Button1","Sub-Button2","Sub-Button3","Sub-Button4","Sub-Button5"];
  metrics =[{"name": "Metric1", "value": "71"},{"name": "Metric2", "value": "19"},{"name": "Metric3", "value": "31"},{"name": "Metric4", "value": "56"},{"name": "Metric5", "value": "21"},{"name": "Metric6", "value": "44"}]
  screen2=false;
  diplayVaue;
  screenright2=false;
  constructor(private globalService: GlobalService) {
    
    
  }
  ngOnInit() {

    
    
  }
  leftPannelButton(value){
    this.screen2 =true;
    this.diplayVaue =value;
      
  }

  rightPannelButton(){
    this.screenright2 =true;
 }
}
