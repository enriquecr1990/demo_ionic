import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Http } from "@angular/http";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public platform : Platform;
  ruta_peticion : any;
  url_respuesta : any;
  data_respuesta : any;
  response_status : any;
  response_data : any;
  response_header : any;

  constructor(public navCtrl: NavController, public http : Http, public platform: Platform, public httpNativo: HTTP) {
    // if (this.platform.is("mobileweb") || this.platform.is("core") && !this.platform.is("cordova")) {
    //   // USANDO EMULADOR WEB        console.log("emulador web");
    //   this.http.get('http://isandovalg.com/IOT/saludo.php').subscribe(
    //     (data) => {
    //       try{
    //         console.log(data);
    //         this.ruta_peticion = data.url;
    //         //this.url_respuesta = data._body;
    //       }catch (error){
    //         console.log(error);
    //       }
    //     }
    //   );
    // }else {
      // USANDO DISPOSITIVO REAL
      this.httpNativo.get('http://isandovalg.com/IOT/saludo.php', {}, {})
        .then(data => {

          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);
          this.response_status = data.status;
          this.response_data = data.data;
          this.response_header = data.headers;

        })
        .catch(error => {

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
      console.log("dispositivo real");
      // this.httpNativo.get('http://isandovalg.com/IOT/saludo.php', {}, {}).then(
      //   (data: any) => {
      //     try {
      //       data = JSON.parse(data.data);
      //       this.data_respuesta = data.toString();
      //       //resolve(data);
      //     } catch (error) {
      //       console.log("json");
      //       console.log(error);
      //       //reject("JSON");
      //     }
      //   },
      //   (error) => {
      //     console.log(error);
      //     if (error.error) {
      //       //reject(error.error);
      //     } else {
      //       //reject(error);
      //     }
      //   }
      // );
    //} //end else

  }

}
