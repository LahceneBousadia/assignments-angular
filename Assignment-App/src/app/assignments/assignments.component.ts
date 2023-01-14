import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})

export class AssignmentsComponent implements OnInit {
  titre = 'Liste des devoirs';
  assignmentSelectionne!: Assignment;
  searchItem!:string;
  search!:String;

  //Pour la pagination
  page: number = 1;
  limit: number = 10;
  totalDocs: number = 0;
  totalPages: number = 0;
  hasPrevPage: boolean = false;
  prevPage: number = 0;
  hasNextPage: boolean = false;
  nextPage: number = 0;

  /** Pour l'affichage en table */
  displayedColumns: string[] = ['id', 'nom','eleve', 'dateDeRendu', 'rendu'];

  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {}

    
  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    console.log("appelé à l'initialisation du composant");
    this.assignmentsService
      .getAssignmentsPagine(this.page, this.limit)
      .subscribe((data) => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log('données reçues');
      });
  }
  initialiserLaBaseAvecDonneesDeTest() {
    this.assignmentsService.peuplerBD();
    console.log('initialiserLaBaseAvecDonneesDeTest: Données Ajoutées ! ###');
  }
  assignmentClique(assignment: Assignment) {
    console.log('assignmentClique : ' + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  pagePremiere() {
    this.page = 1;
    this.getAssignments();
  }

  pageSuivante() {
    if (this.hasNextPage) {
      this.page = this.nextPage;
      this.getAssignments();
    }
  }

  pagePrecedente() {
    if (this.hasPrevPage) {
      this.page = this.prevPage;
      this.getAssignments();
    }
  }

  pageDerniere() {
    this.page = this.totalPages;
    this.getAssignments();
  }
}
