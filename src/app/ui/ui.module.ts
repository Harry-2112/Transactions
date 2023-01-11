import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensableComponent } from './expensable/expensable.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ExpensableComponent,
    CategoriesComponent,
    TransactionsComponent,
    FiltroComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
  ],
  exports:[
    ExpensableComponent,
    CategoriesComponent,
    TransactionsComponent,
    FiltroComponent,
    ModalComponent

  ]
})
export class UiModule { }
