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
    hiddenAge: '',
    quote: 'Two beer or not to beer',
    photo: 'https://us.123rf.com/450wm/navrotska08/navrotska082108/navrotska08210800044/173444113-caricature-de-william-shakespeare-%C3%AAtre-ou-ne-pas-%C3%AAtre-portrait-du-c%C3%A9l%C3%A8bre-%C3%A9crivain-et-auteur.jpg?ver=6',
    newQuote: '',
    newAge: '',
  };


  applyNewQuote() {
    this.user.quote = this.user.newQuote;
  }

  hideAge() {
    this.user.age = this.user.newAge;
  }
  showAge() {
    this.user.age = '25';
  }
  ngOnInit(): void { }
}