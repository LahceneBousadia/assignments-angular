import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis!: Assignment|undefined ;

  constructor(private assignmentsService: AssignmentsService,
              private route:ActivatedRoute,
              private router:Router) {}

  // Appelé AVANT l'affichage du composant, fait partie du
  // cycle de vie du composant
  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    // on récupère l'id dans l'url
    // Le + force la conversion en number
    const id:number = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
    .subscribe((assignment) => {
      this.assignmentTransmis = assignment;
    });
  }

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;
    this.assignmentTransmis.rendu = true;
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        // et on navigue vers la page d'accueil qui affiche
        // la liste des assignments
        this.router.navigate(["/home"]);
      });
  }

  onDeleteAssignment() {
    if (!this.assignmentTransmis) return;
    this.assignmentsService
      .deleteAssignment(this.assignmentTransmis)
      .subscribe((reponse) => {
        console.log(reponse.message);
        this.assignmentTransmis = undefined;
        // et on navigue vers la page d'accueil qui affiche
        // la liste des assignments
        this.router.navigate(["/home"]);
      });
  }
}
