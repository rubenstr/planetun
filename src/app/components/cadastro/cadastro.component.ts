import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InspectionService } from 'src/app/services/inspection.service';

export interface IProduto {
  id: number;
  companyId: string;
  productCode: string;
  productName: string;
  brokerCode: string;
  InspectionNumber: string;
  reports: IReports[];
}

export interface IReports {
  id: number;
  status: string;
  observation: string;
}


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  produto!: FormGroup;
  habilitaButtonSubmit: boolean = false;

  novoProduto! : IProduto;

  constructor(private formBuilder : FormBuilder, private router: Router, private service: InspectionService ) {}

  ngOnInit(): void {
    this.produto  = this.formBuilder.group({
      id: ['', [Validators.required]],
      companyId: ['', [Validators.required]],
      brokerCode: ['', [Validators.required]],
      productCode: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      InspectionNumber: ['', [Validators.required]],
      reportsid: ['', [Validators.required]],
      status: ['', [Validators.required]],
      observation: ['', [Validators.required]],
    })
  }

  validaForm(event: any){
    if(event.status === "VALID") { this.habilitaButtonSubmit = true}
    else this.habilitaButtonSubmit = false
 }

 submitNewProduto(produto:any){
  if(produto && produto.status === "VALID"){
    this.novoProduto  ={
      id: produto.value.id,
      companyId: produto.value.companyId,
      productCode: produto.value.productCode,
      productName: produto.value.productName,
      brokerCode: produto.value.brokerCode,
      InspectionNumber: produto.value.InspectionNumber,
      reports: [{
        id: produto.value.reportsid,
        status: produto.value.status,
        observation: produto.value.observation
      }]
    }

    this.service.postNewInspensao(this.novoProduto).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )









  }
  console.log(this.novoProduto)
}

}
