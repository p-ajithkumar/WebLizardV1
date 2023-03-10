import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit
{

  term:any
  bookmarks:any=[]

  constructor(private api:ApiService, private router:Router)
  {

  }


  ngOnInit(): void {
   
    if(localStorage.getItem('username'))
    {
      
      this.api.getbookmarks().subscribe((data:any)=>
      {
  
        this.bookmarks= data.bookmarks
        
      },
      (data:any)=>
      {
console.log("error msg",data.error.message);


      })
      
    }
  
    else
    {
  this.router.navigateByUrl('login')

    }

  }




  
  removebookmark(content:any)
  {
    
this.api.removebookmark(content.url).subscribe((result:any)=>
{
 this.bookmarks= result.bookmarks
 
})

  }
}
