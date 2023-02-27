import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){
        
    }
    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post('https://mis-clientes-3577a-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            response=>console.log("se ha guardado los objetos:" + response),
            error=>console.log("Error: "+error),
        );
    }

}