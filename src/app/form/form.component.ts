import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  defaultGender : string = 'male';
  defaultSubject : string = 'Ng';

  subjects = [
    {
      type: 'Ng',
      text: 'Angular',
    },
    {
      type: 'j',
      text: 'Java',
    },
    {
      type: 'sharp',
      text: 'C#',
    },
    {
      type: 'js',
      text: 'JavaScript',
    },
  ];

  genders = [
    {
      type: 'male',
      text: 'man',
    },
    {
      type: 'female',
      text: 'woman',
    },
    {
      type: 'other',
      text: 'other',
    }
  ];

  formData = {}
  isSubmited : boolean = false;

  submitForm(form : NgForm){
    this.isSubmited = true;
    this.formData = form.value;
  }
}
