import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {
  
  clienteForm! : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  nombre!: string;

  cliente = {
    nombre : "",
    email : "",
    telefono : "",
    ingreso : "",
    nacimiento: "",
  }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])],

      email: ['', Validators.compose([
        Validators.required,
        Validators.email,

      ])],

      telefono : ["", Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ])],

      ingreso : ["", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ])],

      nacimiento: ["", Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])]
    });
  }

  submit(){
    console.log(this.nombre);
    this.nombre = "Jean";
  }

}
