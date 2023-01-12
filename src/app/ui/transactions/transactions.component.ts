import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  filtro:boolean=false;
  titulo="Transactions"
  fechas=[
    {
      fecha:"January 2023",
      dinero:-530,
      transacciones:[
      {
        icon:"fa fa-bank",
        type:"rent",
        descripcion:"Description",
        precio:-500
      },
      {
        icon:"",
        type:"salary",
        descripcion:"Description",
        precio:+2000
      },
      {
        icon:"",
        type:"transport",
        descripcion:"Description",
        precio:-10
      }
    ]

    },
    {
      fecha:"January 2022",
      dinero:-320,
      transacciones:[
      {
        icon:"",
        type:"education",
        descripcion:"Description",
        precio:-250
      },
      {
        icon:"",
        type:"Groceries",
        descripcion:"Description",
        precio:-20
      },
      {
        icon:"",
        type:"Gift",
        descripcion:"Description",
        precio:-50
      }
    ]

    },
    {
      fecha:"January 2022",
      dinero:-320,
      transacciones:[
      {
        icon:"",
        type:"education",
        descripcion:"Description",
        precio:-250
      },
      {
        icon:"",
        type:"Groceries",
        descripcion:"Description",
        precio:-20
      },
      {
        icon:"",
        type:"Gift",
        descripcion:"Description",
        precio:-50
      }
    ]

    }
  ]

  OnFiltro(){
    if(this.filtro==false){
      this.filtro=true
    }else{
      this.filtro=false
    }
  }
}
