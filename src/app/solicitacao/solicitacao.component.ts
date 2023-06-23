import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
  
})
export class SolicitacaoComponent {

  professor:any
  aluno:any
  turma:any
  sala:any
  data:any
  horario:any

    
  onSubmit(){
    const formData = {
      campo1: this.professor,
      campo2: this.aluno,
      campo3: this.turma,
      campo4: this.sala,
      campo5: this.data,
      campo6: this.horario,
    }
  console.log(JSON.stringify(formData));

  }
}