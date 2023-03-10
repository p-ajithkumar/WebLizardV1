import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string=""
  errorMsg:string=""

  loginForm = this.fb.group({uname:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]]})

constructor(private fb:FormBuilder, private api:ApiService, private router:Router)
{

}
  ngOnInit(): void {
   localStorage.clear()
  }
bg:string = "assets/bglogin.png"

login()
{

  if(this.loginForm.valid)
  {
    //getting acno nd pswd that enter by usr
    let uname= this.loginForm.value.uname
    let pswd= this.loginForm.value.pswd

    this.api.login(uname,pswd).subscribe((data:any)=>
    {

      

      localStorage.setItem('username',data.userdata.name)

      setTimeout(() => {
        this.router.navigateByUrl('main')
      }, 1000);


    },
    (data:any)=>{
      this.errorMsg= data.error.message
      console.log(this.errorMsg);
      
      setTimeout(() => {
        this.errorMsg=""
        this.loginForm.reset()
      },2000);
  
    })
    
  }



}


}
