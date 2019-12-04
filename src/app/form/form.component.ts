import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { Observable } from 'rxjs'; //note to self: tentei sem e funcionou normal

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data$: Object;

  constructor(private instance:DataService) { }

  ngOnInit() {
    this.instance.getData().subscribe(
      result => this.data$ = result
    )
  }

}
