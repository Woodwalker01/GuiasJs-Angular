import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  empleados = [];
  planilla: any;
  nombre: string;
  sueldo: number;
  ISS: number;
  AFP: number;
  RENTA: number;
  sueldoL: number;
  contador:number;
  constructor() {}

  ngOnInit(): void {
    this.ISS = 0.073;
    this.AFP = 0.051;
    this.RENTA = 0.11;
    this.nombre = '';
    this.sueldo = 0;
  }
  ingresar() {
    this.ISS = this.sueldo * 0.073;
    this.AFP = this.sueldo * 0.051;
    this.RENTA = this.sueldo * 0.11;
this.sueldoL=this.sueldo-this.ISS-this.AFP-this.RENTA;
    this.planilla = {
      nombre: this.nombre,
      sueldo: this.sueldo,
      ISS: this.ISS,
      AFP: this.AFP,
      RENTA: this.RENTA,
      sueldoL: this.sueldoL,
    };
    this.empleados.push(this.planilla);
    this.contador++;
  }
}
