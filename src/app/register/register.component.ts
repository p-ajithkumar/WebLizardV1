import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm = this.fb.group({uname:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]], repswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]],mail:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]})

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router)
  {

  }

  register()
  {
    if(this.registerForm.valid){
  
      let uname= this.registerForm.value.uname
      let pswd= this.registerForm.value.pswd 
      let repswd= this.registerForm.value.repswd 
      let mail=this.registerForm.value.mail

      if(pswd==repswd)
      {
       
        this.api.register(uname,pswd,mail).subscribe((result:any)=>
        {
            alert(result.message);
            
            setTimeout(() => {
              this.router.navigateByUrl('')
            },2000);
        },
        (result:any)=>
        {
          alert(result.error.message)
        })
        
      }

      else
      {
        alert('error, try again later')
      }

      
    }

    
      
     
  }

}
