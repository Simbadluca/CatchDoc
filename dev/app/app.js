// créer un dossier pour chaques class et créer un fichier pour chaques class pages/home/home.js et pages/user/user.js
// retirer les class HomePage et UserPage de app.js pour les mettres dans leur fichier respectif précedement créer.
// Rendre exportable les class HomePage et UserPage
// Importer les class HomePage et UserPage dans le fichier app.js.
// Mettre à jour le class Myapp pour pouvoir utiliser les class HomePage et UserPage


import {HomePage } from './pages/user/home.js';
// import {UserPage } from './pages/user/user.js';

class MyApp {

  constructor(){
    this.appBody = document.getElementsByTagName("section")[0];
  }

  start(){
    // init HomePage
    let homePage = new HomePage(this.appBody);
  }

}

let myApp = new MyApp();
myApp.start();
