import { Empleado } from "src/app/empleado.model";
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable()
export class EmpleadoService {
  constructor(private ServicioVentanaEmergente: ServicioEmpleadosService,private dataService:DataServices) { }
  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }
  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado [] = [];
  /**
   
  empleados: Empleado [] = [
    new Empleado("juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa de Seccion",3500),
    new Empleado("Laura","Lopez","Administrativo",2500),
  ];

   */
  agregarEmpleadoServicio(empleado:Empleado):void {
    this.ServicioVentanaEmergente.muestraMensaje("Persona que se va Agregar:"+empleado.nombre +"con salario"+empleado.salario);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }
  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }
  actualizarEmpleado(indice:number,empleado:Empleado){
    let empleadoModificado:Empleado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.salario = empleado.salario;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.apellido=empleado.apellido;
  }
 eliminarEmpleado(indice:number){
      this.empleados.splice(indice,1);
  }

}
