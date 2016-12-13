import {UserPage } from '../user/user.js';

export class HomePage {

  constructor(appBody){
    this.appBody = appBody
    this.pageTitle = 'Hello world!';
    this.initUI();
  }

  initUI(){
    console.log(this.appBody)
    // remove all section before display UI

    // create page skeleton
    let pageSkeleton = `<h1>${this.pageTitle}</h1>
        <form>
          <p>
            <label for="email">Email:</label> <input type="email" name="email" value="" placeholder="votreemail.ch"  /><br/>
            <label for="password">Password:</label> <input type="password" name="password" value=""  /><br/>
            <button>Login</button>
          </p>
        </form>`;
    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
    this.loadEventUI()

  }

  loadEventUI(){
    let loginForm = document.getElementsByTagName("form")[0];
    loginForm.addEventListener("submit",  event => this.onLogin(event), false)
  }

  onLogin(event){
    event.preventDefault()
    let validationInput = 0
    let formInput = {}
    let form = document.forms[0].elements
    for (let i = 0; i < form.length; i++) {
      if(form[i].value){
        formInput[form[i].name] = form[i].value
        validationInput++
      }
    }
    console.log(formInput)
    if(validationInput === 2){
      console.log('load UserPage')
      var NewPage =new UserPage(this.appBody,formInput);
    }
  }

}
