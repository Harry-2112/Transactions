import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  titulo="new category"
  colores=[
    {color:"#EF4444"},
    {color:"#F97316"},
    {color:"#F59E0B"},
    {color:"#10B981"},
    {color:"#14B8A6"},
    {color:"#06B6D4"},
    {color:"#0EA5E9"},
    {color:"#3B82F6"},
  ]
  iconos=[
    {icon:"fa fa-bank"},
    {icon:"fa fa-shopping-cart"},
    {icon:"fa-solid fa-notes-medical"},
    {icon:"fa fa-gamepad"},
    {icon:"fa fa-book"},
    {icon:"fa fa-graduation-cap"},
    {icon:"fa fa-car"},
    {icon:"fa fa-gift"},
  ]
}
