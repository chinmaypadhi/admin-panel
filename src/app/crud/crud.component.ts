import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  form!: FormGroup;
  url:any;
  buttonShow : boolean =false;
  constructor(public fb : FormBuilder ,public service : CrudService) {}

  ngOnInit(): void {
    this.viewData();
    this.form = this.fb.group({
      name: [null],
      city: [null],
      id:[0]
  })
}


  details: any;
  viewData() {
    this.service.viewData().subscribe(
      (response: any) => {
        this.details = response.infoData;
      },
      (error) => {
        alert('error');
        console.log(error);
      }
    );
  }

  submit() {
    this.url="https://localhost:44361/api/values/addData";
    this.service.createData(this.form.value,this.url).subscribe(
      (response: any) => {
        this.viewData();
      },
      (error) => {
        alert('error');
        console.log(error);
      }
    );
  }
  

  // Edit(id:number)
  // {
  //   this.service.editData(id).subscribe(
  //     (response: any) => {
  //       this.form.controls['id'].setValue(response.infoData[0].id);
  //       this.form.controls['name'].setValue(response.infoData[0].name);
  //       this.form.controls['city'].setValue(response.infoData[0].city);
  //       this.buttonShow=true;
  //     },
  //     (error) => {
  //       alert('error');
  //       console.log(error);
  //     }
  //   ); 
  // }


  update() {
    this.url='https://localhost:44361/api/values/updateDataById';
    this.service.createData(this.form.value,this.url).subscribe(
      (response: any) => {
        this.viewData();
      },
      (error) => {
        alert('error');
        console.log(error);
      }
    );
  }

  Delete(id:number) {
    this.form.controls['id'].setValue(id);
    this.url='https://localhost:44361/api/values/DeleteDataById';
    this.service.Delete(this.form.value,this.url).subscribe(
      (response: any) => {
        this.viewData();
      },
      (error) => {
        alert('error');
        console.log(error);
      }
    );
  }
  

get f(){
  return this.form.controls;
}

}
