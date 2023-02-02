import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from '../../empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de empleados';
  title="aqui estoy soy yo"
  empleados: Empleado []=[];
  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadoService){
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }


  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    this.miServicio.muestraMensaje("Nombre del Empleado" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }


  cuadronombre:string="hola";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;

}
