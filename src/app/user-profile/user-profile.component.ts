import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  user = {
    name: 'Doe',
    firstName: 'John',
    age: '25',
    quote: 'Two beer or not to beer',
    photo: 'https://us.123rf.com/450wm/navrotska08/navrotska082108/navrotska08210800044/173444113-caricature-de-william-shakespeare-%C3%AAtre-ou-ne-pas-%C3%AAtre-portrait-du-c%C3%A9l%C3%A8bre-%C3%A9crivain-et-auteur.jpg?ver=6',
    newAge: '',
    condition: true,
    attribut: '0',
    fruit: 'cerise',
  };



  afficherAge() {
    this.user.condition = !this.user.condition;
  }


  //   <!-- <div class="demo-ngClass">
  //     <p [ngClass]="{'success' : etat=='Success','danger': etat=='danger', 'warning': etat=='warning''}">
  //         Ce texte va changer de couleur en fonctions de la conditions
  //     </p>
  //     <div>
  //         <button (click)="changerEtat('success')">
  //             succes
  //         </button>
  //         <button (click)="changerEtat('warning')">
  //             warning
  //         </button>
  //         <button (click)="changerEtat('danger')">
  //             danger
  //         </button>
  //     </div>
  // </div> -->
  //   wilders: Array<string> = [
  //     "hana",
  //     "steven",
  //     "maher",
  //     "lyndia",
  //     "neila"
  //   ]

  //   fun() {
  //     switch (this.user.fruit) {
  //       case 'apple': {
  //         console.log("pomme");
  //         break;
  //       }
  //       case 'orange': {
  //         console.log("orange");
  //         break;
  //       }
  //       default: {
  //         console.log("autre fruits")
  //       }
  //     }
  //   }

  //   ngOnInit(): void { }
}