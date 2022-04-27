import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactformService } from 'src/app/services/contactform.service';


@Component({
  selector: 'app-contact-page', 
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private builder: FormBuilder,
    private contact: ContactformService) { }

  FormData: FormGroup;
  ngOnInit(){
    this.FormData = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('',  [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required])  }) 
  }

  onSubmit(FormData: FormData) {
    
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
this.FormData.reset();
    }


}
