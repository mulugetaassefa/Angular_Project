import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements onInit  {
  
 @Input() team: string [] =[]
 @Input() index =0;
 constructor() {}
 ngOnInit(): void {

 }

}
