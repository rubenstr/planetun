import { Component } from '@angular/core';
import { InspectionService } from 'src/app/services/inspection.service';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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
        console.log('lista:', this.lista)
        this.dataSource = Object.values(this.lista);
        console.log('DataSource:', this.dataSource)},
      (error) => console.log(error)
    )

  }

}
