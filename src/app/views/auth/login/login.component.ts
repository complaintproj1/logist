import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  name: string ="";
  address: string ="";
  phone: Number =0;

  constructor(private router: Router,private http: HttpClient )
  {
   
  }
  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.address,
      "password" : this.phone
    };
    this.http.post("https://logistwork.onrender.com/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
      
 
        this.name = '';
      this.address = '';
        this.phone  = 0;
        this.router.navigate(['/profile']);
    });
  }

}
