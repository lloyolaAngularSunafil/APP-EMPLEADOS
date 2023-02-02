import { Empleado } from "src/app/empleado.model";

export class EmpleadoService {


  empleados: Empleado [] = [
    new Empleado("juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa de Seccion",3500),
    new Empleado("Laura","Lopez","Administrativo",2500),
  ];

  agregarEmpleadoServicio(empleado:Empleado):void {
    this.empleados.push(empleado);
  }
}
