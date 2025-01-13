import { Component } from "@angular/core";
import {  Headercomponent } from "./headercomponent/headercomponent.component"
import { userformcomponent } from "./userform/userform.component";
 @Component({
  selector: 'app-root',
  standalone:true,
  imports:[Headercomponent,userformcomponent],
  templateUrl:'./app.Component.html',
  styleUrls:['./app.component.css']
 })
 export class appcomponent{

 }