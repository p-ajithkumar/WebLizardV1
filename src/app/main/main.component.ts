import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  term:any;
  message:any;


newsContent:any=[]

  constructor(private api:ApiService, private router:Router)
  {

  }
  ngOnInit(): void {
  

    
  if(localStorage.getItem('username'))
  {
    
    this.api.getNews().subscribe((data:any)=>
    {
      this.newsContent= data.newsData
      console.log(this.newsContent);
      
    })
    
  }

  else
  {
this.router.navigateByUrl('login')
  }
  
  }

  addBookmark(content:any)
  {
this.api.addBookmark(content).subscribe((result:any)=>
{
  this.message = result.message
  alert(this.message)
},
(result)=>{
  alert(result.error.message)
})



  }

  openWhatsApp(url:any) {  
    window.open('https://web.whatsapp.com://send?text='+url);  
    }  

    
    logout()
    {
      localStorage.clear()
      this.router.navigateByUrl('login')
    }
}






 
