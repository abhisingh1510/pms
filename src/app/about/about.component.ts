import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  con=true
  emp_details=[{'emp_no':10001,'esal':20000,'enm':'xyz'},
              {'emp_no':10001,'esal':20000,'enm':'xyz'},
              {'emp_no':10001,'esal':20000,'enm':'xyz'}]
  username="admin"
  password="singh"
  mks=[10,20,30,40,50]

  constructor() { }

  ngOnInit() {
  }

}
