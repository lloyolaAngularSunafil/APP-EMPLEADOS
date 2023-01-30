import { Component, OnInit,Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }
  arrayCaracteristicas=[''];
  agregarCaracteristica(nuevaCaracteristica: string){
    this.miServicio.muestraMensaje(nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
