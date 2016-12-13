import {API_KEY_CONFIG} from './apiKey_config'

export class UnsplashService {

  constructor(){
    this.data = [];
    this.params = API_KEY_CONFIG
    this.queryURL = 'https://api.unsplash.com/photos/random?count=1&client_id=';
  }

  GetRandomImg(){
      return new Promise((resolve, reject) => {

          // Instancier mon objet
          var req = new XMLHttpRequest();
          // Ouvrir la connexion
          req.open("get", this.queryURL + this.params );
          req.onload = () =>{

            // L'état qui nous intéresse est le "DONE = 4"
            if (req.status==200) {
              resolve(req.responseText);
            }
            else {
              // Otherwise reject with the status text
              // which will hopefully be a meaningful error
              reject(Error(req.statusText));
            }
          };

          // Handle network errors
          req.onerror = ()=> {
            reject(Error("Network Error"));
          };
          // Make the request
          req.send();
        });
    }
}
