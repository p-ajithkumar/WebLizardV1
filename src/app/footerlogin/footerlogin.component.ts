import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footerlogin',
  templateUrl: './footerlogin.component.html',
  styleUrls: ['./footerlogin.component.css']
})
export class FooterloginComponent {

  constructor(private router:Router)
  {

  }


  logout()
  {
    localStorage.clear()
     this.router.navigateByUrl('login')
  }
}
