import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   newMembersName ='';
   members:string[] =[];
   errorMessage = '';
   numberOfTeam: number | ""="";
   teams: string[][] =[];
  
   onInput(member: string ) {
    this.newMembersName =member;
    console.log(this.newMembersName);
   }
      onNumberOfTeamsInput(value: string) {

        this.numberOfTeam =Number(value);
      }

   addMember() {
  
     if (!this.newMembersName) {
       this.errorMessage ="Name can't be empty";
      return;
     }
      this.errorMessage ='';
    this.members.push(this.newMembersName);
       this.newMembersName =''
   }   
    
     generateTeams() {
     if (!this.numberOfTeam || this.numberOfTeam <= 0 ) {
      this.errorMessage = 'Invalid Number of Teams';
         return;
     }
     
     if(this.members.length < this.numberOfTeam ) {
       this.errorMessage = 'Not enough members';
       return;
     }

     this.errorMessage = 'Invalid Number of Teams';
      const allMembers =[...this.members];

   while (allMembers.length ) { 
     for (let i=0; i<this.numberOfTeam; i++){
       const randomIndex =Math.floor(Math.random() * allMembers.length);
      const member =allMembers.splice(randomIndex,1)[0];
      if(!member)break;
      if(this.teams[i]) {
        this.teams[i].push(member)
      } else {
        this.teams[i] =[member]
      }
      }
    }
       this.members =[];
       this.numberOfTeam = '';
     }
    
}
