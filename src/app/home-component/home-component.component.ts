import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})


export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de empleados';
  constructor (private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadoService){ 
    
  }

  
  empleados: Empleado []=[];

  ngOnInit(): void {

    this.empleados = this.empleadosService.empleados;
  }

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    //this.miServicio.muestraMensaje("Nombre del Empleado" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }


  cuadronombre:string="hola";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;

}

