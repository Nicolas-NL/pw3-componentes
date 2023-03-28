import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
  tipoBruxo= true;
  constructor(){

  }
  @Input() nome: String ="";
  @Input() nome_var: String="";

  @Input() ehBruxo: Boolean= true;
  @Input() nivel: number = 0;

}
