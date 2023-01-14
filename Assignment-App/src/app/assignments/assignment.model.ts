export class Assignment {
  _id?:string;
  id!:number;
  nom!: string;
  dateDeRendu!: Date;
  rendu!: boolean;
  note!: string;
  remarques!: string;
  matiere!: string;
  eleve!: string;

}
export class Matieres {
  intitulé!: string;
  imgMat!: string;
  imgProf!: string;
  
}
