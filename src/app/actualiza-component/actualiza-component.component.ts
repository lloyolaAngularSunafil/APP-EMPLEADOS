import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadoService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  empleados: Empleado []=[];
  accion:number ;
  constructor (private router: Router,private route:ActivatedRoute,private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadoService){
  }


  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadronombre = empleado.nombre;
    this.cuadroapellido=empleado.apellido;
    this.cuadrocargo= empleado.cargo;
    this.cuadrosalario=empleado.salario;



  }

  volverHome(){
    this.router.navigate(['contacto']);
  }
/*
  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);
  }

  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }
*/
  actualizaEmpleado(){
    if (this.accion==1){
      let miEmpleado=new Empleado(this.cuadronombre,this.cuadroapellido,this.cuadrocargo,this.cuadrosalario);
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
      this.router.navigate(['']);
    }
    else{
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }

  }



  cuadronombre:string="hola";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;

  indice:number;

}
