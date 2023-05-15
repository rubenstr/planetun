import { Component } from '@angular/core';
import { InspectionService } from 'src/app/services/inspection.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  displayedColumns: string[] = ['id', 'companyId', 'brokerCode', 'productCode', 'productName', 'InspectionNumber', 'status', 'observation'];
  lista!: any;
  dataSource!: any[];

  constructor(private service: InspectionService ){
   this.getReports();
  }

  getReports(){
    this.service.getAllInspensao().subscribe(
      (res: any)   => { 
        this.lista = res;
        this.dataSource = Object.values(this.lista)},
      (error) => console.log(error)
    )

  }

}
