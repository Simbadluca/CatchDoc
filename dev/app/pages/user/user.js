import {UnsplashService } from '../../providers/prov.js';

export class UserPage {

  constructor(appBody,formInput){
    this.appBody = appBody
    this.formData = formInput
    this.pageTitle = "Hello";
    this.initUI();
    this.startClock();
    //this.getBackgroundIMG();
    // this.startShuffle(30);
  }

  startClock() {
    setInterval( _ =>{
        let mydtime = new Date();
        let hr=mydtime.getHours();
        let mi=mydtime.getMinutes();
        let se=mydtime.getSeconds();
        if (hr<10) hr = "0"+hr;
        if (mi<10) mi = "0"+mi;
        if (se<10) se = "0"+se;
        document.getElementById("clock").innerHTML= hr +":" + mi + ":" + se;
      },1000);
  }

  startShuffle(a) {
    let i=0;
    setInterval(_ =>{
        document.getElementById('pict').src="https://unsplash.it/1920/94" + (++i) + "/?random";
      },a*1000);
  }

  initUI(){
      // remove all section before display UI
      if(document.getElementsByTagName("form")[0]){
        document.getElementsByTagName("form")[0].parentNode.removeChild(document.getElementsByTagName("form")[0])
        }
      let el=document.getElementById("affiche");
      if (el.hasChildNodes()){
          el.removeChild(el.firstChild);
        }

      var NewImg =new UnsplashService();

      NewImg.GetRandomImg();

      // create page skeleton
      let pageSkeleton = `
      <section id='block' style='font-family: "Montserrat", Helvetica, sans-serif; text-align: center; width: 100%; margin: auto;'>

<!-- SiteSearch Google -->

      <form id="cref_iframe" method="get" action= "http://www.google.ch/search" target="_blank">
          <div id='google' style='position:absolute; top:10px; left:10px; font-size: 15px; color: white; text-shadow: 2px 2px 4px #000000;'>
              <input type="hidden" name="cx" value="009706583426851356966:4-qyrqhfcgi" />
              <input type="hidden" name="cof" value="FORID:9" />
              <input name="sitesearch" value="www.doit4me.ch" type="hidden">
              <input style='position:absolute; top:0px; left:0;' type="image" name="sa" value="Recherche Google" src="../images/loupe.png" alt="Submit" width="48" height="48" />
              <input style='position:absolute; top:15px; left:50px; background-color:rgba(255, 255, 200, 0.3);' type="text" name="q" size="31" />
          </div>
      </form>

<!-- SiteSearch Google -->

        <div id='clock' style='position:absolute; top:350px; left:750px; font-size: 90px; color: white; text-shadow: 2px 2px 4px #000000;'>

        </div>

        <div style='position:absolute; top:435px; left:755px; font-size: 40px; color: white; text-shadow: 2px 2px 4px #000000;'>
          <img id="pict" src="../images/logo.png" alt="Simbadluca" style="position:absolute; display: block; margin: auto;" />
        </div>

        <div id='autore' style='position:absolute; bottom:10px; left:10px; font-size: 15px; color: white; text-shadow: 2px 2px 4px #000000;'>

        </div>

      </section>
      </body>
      `;
// <p style='text-align: center;'>${this.pageTitle} ${this.formData.email} !</p>
      //<img id="pict" src="https://unsplash.it/1920/940/?random" alt="Random image from unsplash" style="position:absolute; top:0px; left:0px" />
      // let pageSkeleton = `<h1>${this.pageTitle} ${this.formData.email} !</h1>`;
      // add page skeleton in body

      //     <body sryle='background: url('https://unsplash.it/1920/940/?random') no-repeat center center fixed;'>'

      //    this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )

      document.body.insertAdjacentHTML( 'afterbegin', pageSkeleton );
      document.getElementsByTagName("section")[0].style.opacity = 0;
      this.getBackgroundIMG()

    }
    // charge l'evenement click sur le div autore
    loadEventUI(un_truc){
      let loginAutore = document.getElementById("autore");
      loginAutore.addEventListener("click",  event => this.onLogin(event, un_truc), false)
    }

    // mettre ici le code pour ouvrire une autre onglet du browser
    onLogin(event, un_truc){
      window.open(un_truc,'_blank');
    }

    getBackgroundIMG(){
        let unsplash = new UnsplashService();
        let queryService = unsplash.GetRandomImg()
        queryService.then((response)=>{
          //console.log('res 1 -> ', response)
           this.displayBackground(JSON.parse(response))
           return response
         })
         .then((response)=>{
           // ajouter dans html le nom de la personne
           console.log(JSON.parse(response)[0].user.first_name);
           document.getElementById('autore').innerHTML = "L'image utilisée est de : " + JSON.parse(response)[0].user.first_name;
           this.loadEventUI(JSON.parse(response)[0].user.links.html);
         })
    }

    // affiche l'image en background
    displayBackground(data){
      console.log('service response-> ')
      console.log( data[0] )
      let pageContainer = document.getElementsByTagName("section")[0]
      if(pageContainer){
        // some css with JS for BG
        pageContainer.style.height = `100%`;
        pageContainer.style.width = `100%`;
        pageContainer.style.position = `absolute`;
        pageContainer.style.top = `0`;
        pageContainer.style.left = `0`;
        pageContainer.style.padding = `0px`;
        pageContainer.style.textAlign = `center`;
        pageContainer.style.color = `#fff`;
        pageContainer.style.opacity = `1`;
        pageContainer.style.background = `url(${data[0].urls.regular}) center center no-repeat`;
        pageContainer.style.backgroundSize = `cover`;

      }
    }

}
