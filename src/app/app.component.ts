import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-componentes';

  personagens = [
    {"nome":"Harry Potter", "nome_var":"Pena de Fenix", "ehBruxo":true, "nivel": 3},
    {"nome":"Hermione Granger", "nome_var":"Videira", "ehBruxo":true, "nivel": 2},
    {"nome":"Albus Dumbledore", "nome_var":"Varinha das Varinhas", "ehBruxo":true, "nivel": 1},
    {"nome":"Hagrid", "nome_var":"", "ehBruxo":false, "nivel": 0}
  ];
}
