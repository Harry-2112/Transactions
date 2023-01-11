import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  categoria=[
    {nombre:'rent',id:"item1",value:"option1"},
    {nombre:'salary',id:"item2",value:"option2"},
    {nombre:'transport',id:"item3",value:"option3"},
    {nombre:'education',id:"item4",value:"option4"},
    {nombre:'groceries',id:"item5",value:"option5"},
    {nombre:'gift',id:"item6",value:"option6"}
  ]
}
