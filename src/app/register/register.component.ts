import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  d;
  flag=false;
  
  constructor(private http:Http) { }

  ngOnInit() {
   
    //this.http.get("http://jsonplaceholder.typicode.com/users").map((res) => res.json()).subscribe((data) => console.log(data))
    
  }

  onClickSubmit(data){
    this.http.post("http://localhost:3000/webapi/insertdata",data).map((res) => res.json()).subscribe((data) => this.showresponse(data))
  }

  showresponse(data)
  {
   this.d=data;
  }

}
