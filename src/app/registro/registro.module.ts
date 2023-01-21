import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    PostComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    PostComponent
  ]
})
export class RegistroModule { }
