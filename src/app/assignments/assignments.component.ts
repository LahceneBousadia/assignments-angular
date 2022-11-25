import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des devoirs";
  assignmentSelectionne!:Assignment;


  assignments:Assignment[] = [];

  constructor(private assignmentsService:AssignmentsService) { }

   ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
    this.assignmentsService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);

  }

  assignmentClique(assignment:Assignment){
    console.log("assignmentClique : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  
}
