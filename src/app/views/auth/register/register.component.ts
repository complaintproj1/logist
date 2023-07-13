import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent  {


  ngOnInit(): void {}
  name: string ="";
  address: string ="";
  phone: Number =0;

  constructor(private http: HttpClient )
  {
   
  }
  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone
    };
    this.http.post("http://localhost:8086/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
      
 
        this.name = '';
      this.address = '';
        this.phone  = 0;
    });
  }

}
