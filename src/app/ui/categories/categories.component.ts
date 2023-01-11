import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  titulo="categoria"
  links=[
    {icon:"fa fa-plus-circle",nombre:"Expensess"},
    {icon:"fa fa-minus-circle",nombre:"income"}
  ]
  total=1250;
  span="total Expenses"
  cards=[
    {icon:"fa fa-bank",nombre:"rent",precio:"500",color:"secondary"},
    {icon:"fa fa-shopping-cart",nombre:"groceries",precio:"100",color:"primary"},
    {icon:"fa fa-car",nombre:"transport",precio:"150",color:"danger"},
    {icon:"fa-solid fa-notes-medical",nombre:"health",precio:"200",color:"warning"},
    {icon:"fa fa-gift",nombre:"gifts",precio:"50",color:"info"},
    {icon:"fa fa-book",nombre:"education",precio:"250",color:"success"}
  ]
}
