import { Empleado } from "src/app/empleado.model";
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from './src/app/servicio-empleados.service';

@Injectable()
export class EmpleadoService {
  constructor(private ServicioVentanaEmergente: ServicioEmpleadosService) { }

  empleados: Empleado [] = [
    new Empleado("juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa de Seccion",3500),
    new Empleado("Laura","Lopez","Administrativo",2500),
  ];

  agregarEmpleadoServicio(empleado:Empleado):void {
    this.ServicioVentanaEmergente.muestraMensaje("Persona que se va Agregar:"+empleado.nombre +"con salario"+empleado.salario);
    this.empleados.push(empleado);
  }
}
