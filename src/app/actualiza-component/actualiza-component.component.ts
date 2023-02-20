import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor (private router: Router,private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadoService){ 
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  empleados: Empleado []=[];

  volverHome(){
    this.router.navigate(['contacto']);
  }

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    //this.miServicio.muestraMensaje("Nombre del Empleado" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }


  cuadronombre:string="hola";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;



}
