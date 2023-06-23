import { Component } from '@angular/core';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  
  array!: any

  constructor(private historicoService: HistoricoService){
    this.historicoService.requisition().subscribe(a=>this.array = a)
  }

    displayedColumns: string[] = ['Professor', 'email', 'aluno', 'turma', 'sala', 'data'];
    
  

}

