import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlogin',
  templateUrl: './headerlogin.component.html',
  styleUrls: ['./headerlogin.component.css']
})
export class HeaderloginComponent {

  constructor(private router:Router)
  {

  }



 Logout()
 {
   localStorage.clear()
   this.router.navigateByUrl('login')
 }

}
