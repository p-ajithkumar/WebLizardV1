import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router)
  {

  }

  updateForm = this.fb.group({ mail:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]], pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]], 
  repswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]]})

  update()
  {

    if(this.updateForm.valid){
      let mail=this.updateForm.value.mail
      let pswd= this.updateForm.value.pswd 
      let repswd= this.updateForm.value.repswd 
     
      console.log(mail,pswd,repswd);

      if(pswd==repswd)
      {
       
        this.api.upadte(mail,pswd).subscribe((result:any)=>
        {
          alert(result.message)
          
          setTimeout(() => {
            this.router.navigateByUrl('')
          },2000);

        
        },
        (result:any)=>
        {
          alert(result.message)
  
        })
        
      }

      else
      {
        alert('error')
      }
      
  }

  else
  {
    console.log('details are not valid');
    
  }
}


}
