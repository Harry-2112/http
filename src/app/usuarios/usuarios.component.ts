import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{
  constructor(private _userService:UsersService){}
  usuarios:any=[];
  mostrar(): void {
    this.obtenerUsuarios()
  }
  ocultar(){
    this.usuarios=[]
  }
  obtenerUsuarios(){
    this._userService.getUsers().subscribe(data=>{
      console.log(data);
      this.usuarios=data
    },error=>{
      console.log(error);
    })
  }
}
