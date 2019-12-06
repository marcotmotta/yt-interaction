import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { Observable } from 'rxjs'; //note to self: tentei sem e funcionou normal

//import * as angular from "angular";

//declare const alo: any;
//declare var angular: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data$: Object;

  constructor(private instance:DataService) { }

  ngOnInit() {
  }

  request(){
    var search_topic = (<HTMLInputElement>document.getElementById("search")).value;
    this.instance.getData(search_topic).subscribe(
      result => this.data$ = result
    )
  }

}
