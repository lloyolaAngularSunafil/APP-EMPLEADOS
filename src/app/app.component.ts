import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  title="aqui estoy soy yo"

  empleados: Empleado [] = [
    new Empleado("juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa de Seccion",3500),
    new Empleado("Laura","Lopez","Administrativo",2500),
  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadronombre:string="";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;  

}
