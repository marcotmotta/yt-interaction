import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { Observable } from 'rxjs'; //note to self: tentei sem e funcionou normal

//declare const alo: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data$: Object;
  msg = "hello";
  q = "minecraft"

  constructor(private instance:DataService) { }

  ngOnInit() {
    /* this.instance.getData().subscribe(
      result => this.data$ = result
    ) */
  }

  request(){
    this.instance.getData(this.q).subscribe(
      result => this.data$ = result
    )
  }

  /* $(".button-top").on(click, function(){
    alert("aaaa");
  }) */

}
