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
        <div id='affiche'>

        </div>`;
    // add page skeleton in body
    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )

    require('pdfjs-dist');
    var fs = require('fs');
    var data = new Uint8Array(fs.readFileSync('exemple.pdf'));
    PDFJS.getDocument(data).then(function (pdfDocument) {
      console.log('Number of pages: ' + pdfDocument.numPages);
    });

  }

}
