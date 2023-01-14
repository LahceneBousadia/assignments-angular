import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  error:String ='';
  message:string='';
  hide = true;
  inscriptionForm!: FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService) { 
    this.inscriptionForm = this.fb.group({
      'nomprenom':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  inscription(){
    if(this.inscriptionForm.invalid){
    }else{

      const data = this.inscriptionForm.value;
      delete data['confirm'];
      this.auth.inscription(data).subscribe((res: { success: any; message: string; })=>{
      if(res.success){
        this.inscriptionForm.reset();
      }else{
        this.message=res.message;
      }
    }, (err: { message: string; })=>{
      this.message=err.message;
    });
    }
  }
}
