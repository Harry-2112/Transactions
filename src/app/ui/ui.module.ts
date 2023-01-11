import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensableComponent } from './expensable/expensable.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsComponent } from './transactions/transactions.component';



@NgModule({
  declarations: [
    ExpensableComponent,
    CategoriesComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExpensableComponent,
    CategoriesComponent,
    TransactionsComponent
  ]
})
export class UiModule { }
