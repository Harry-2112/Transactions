import { Component } from '@angular/core';

@Component({
  selector: 'app-expensable',
  templateUrl: './expensable.component.html',
  styleUrls: ['./expensable.component.css']
})
export class ExpensableComponent {
  titulo = "{expensable}"
  itenMenu = [
    {icon:"fa fa-address-card",nombre:"categories"},
    {icon:"fa fa-list-alt",nombre:"transactions"},
    {icon:"fa-solid fa-record-vinyl",nombre:"budgets"}
  ]
}
