import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

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
  constructor(private miServicio:ServicioEmpleadosService){}
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    this.miServicio.muestraMensaje("Nombre del Empleado" + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }

  
  cuadronombre:string="hola";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;  

}
