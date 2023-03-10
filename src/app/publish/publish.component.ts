import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  login = true;

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router)
  {
    
  }

  ngOnInit(): void {
  
    if(localStorage.getItem('username'))
    {
      this.login = true
    }

    else
    {
      this.login = false
    }
 
  }

publishForm = this.fb.group({url:'',author:'',title:'',urlToImage:'',description:''})

username = localStorage.getItem('username')

  publish()
  {

    
    let author = this.publishForm.value.author
    let title = this.publishForm.value.title
    let urlToImage = this.publishForm.value.urlToImage
    let url = this.publishForm.value.url
    let description = this.publishForm.value.description


    if(this.username==author)
    {
      this.api.publish(author,title,description,url,urlToImage).subscribe((result:any)=>
      {
        alert(result.message)
        this.router.navigateByUrl('main')
        
      },
      (result)=>
      {
        alert(result.error.message)

      })

    }


    else{
      alert('Error! Kindly Enter Registered Usename')
  
    }

  
  }
}

