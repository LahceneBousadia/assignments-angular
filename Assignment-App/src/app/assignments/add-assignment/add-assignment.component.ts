import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import {FormBuilder, Validators} from '@angular/forms';
//import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // Pour le formulaire
  nomDevoir = '';
  dateDeRendu!: Date;
  rendu!: boolean;
  eleve= '';
  matiere= '';
  note='';
  remarques='';

  // Pour le stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
  thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });

  constructor(
    private assignmentsService: AssignmentsService,
    private router: ActivatedRoute,
    private _formBuilder: FormBuilder

  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(
      'onSubmit : ' + this.nomDevoir + ' date de rendu : ' + this.dateDeRendu
    );

    // On ajoute un nouvel assignment
    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    nouvelAssignment.id = Math.floor(Math.random() * 1000);
    // le tableau est chez le papa comment faire ?
    //this.assignments.push(nouvelAssignment);

    //this.nouvelAssignment.emit(nouvelAssignment);
    this.assignmentsService
      .addAssignment(nouvelAssignment)
      .subscribe((reponse) => {
        console.log(reponse.message);
        // ON VA DEVOIR NAVIGUER AVEC LE ROUTER
        // VERS LE COMPOSANT QUI AFFICHE LA LISTE
        //this.router.navigate(['/home']);
      });
  }
}
