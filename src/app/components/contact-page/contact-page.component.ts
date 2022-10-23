import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ContactformService } from 'src/app/services/contactform.service';


@Component({
  selector: 'app-contact-page', 
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private builder: FormBuilder,
    private contact: ContactformService) { }

  FormData!: FormGroup;
  showValidationError: boolean = false;
  ngOnInit(){
    this.FormData = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('',  [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required])  }) 
  }

  onSubmit(Form: FormGroup) {
    let FormData = Form.value;
    if(Form.invalid){return this.showValidationError = true;}
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe({ next : response => {
    
    console.log(response)
    },
    error: error => {
      console.log(error);
    }
  
  })
this.FormData.reset();
return this.showValidationError = false;
    }


    ngOnDestroy(): void {
      this._unsubscribeAll.next();
    }

}
