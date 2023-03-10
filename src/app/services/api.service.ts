import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  login(uname:any,pswd:any)
  {
    const body={uname,pswd}
    
    
return this.http.post('http://localhost:3000/login',body)
  }



  getNews()
  {
    return this.http.get('http://localhost:3000/news')
  }



  register(uname:any,pswd:any,mail:any)
  {

const body ={uname,pswd,mail}

return this.http.post('http://localhost:3000/register',body)
  }


  

  getbookmarks()
  {
    return this.http.get("http://localhost:3000/getbookmarks")
  }


  addBookmark(content:any)
  {
    return this.http.post("http://localhost:3000/addtobookmark",content)
  }


  removebookmark(url:any)
  {

    const body ={url}

    console.log("content in api service is",url);
    
    return this.http.post("http://localhost:3000/removebookmark",body)
    
  }


  upadte(mail:any,pswd:any)
  {
    const body ={mail,pswd}

    console.log('api service',body);
    
    return this.http.put("http://localhost:3000/update",body)
  }



  
  publish(author:any,title:any,description:any,url:any,urlToImage:any,)
  {
 const body = {author,title,description,url,urlToImage}
 return this.http.post("http://localhost:3000/post-news",body)
  }

}
