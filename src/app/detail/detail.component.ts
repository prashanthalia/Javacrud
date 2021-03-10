
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../share.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  responseText: any;
  itemsData: any;
 constructor(private formBuilder: FormBuilder, private _service: ShareService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      itemId:[''],
      itemName: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
}) 
this.getItems()
}

  get f() { return this.registerForm.controls };

  onSubmit() {
    let userInfo = {
      itemName: this.registerForm.value.itemName,
      price: this.registerForm.value.price,
      quantity: this.registerForm.value.quantity
    };

    if (this.registerForm.invalid) { return }
    this._service.createNewUser(userInfo).subscribe(resp => {
      console.log(resp, '====respsoncedata====');

    })
    console.log(this.registerForm.value);

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getItems(){
     this._service.fetch().subscribe(resp=>{
      this.responseText = resp;
      console.log(this.responseText) //this responseText for total data.
      
      this.itemsData = this.responseText.item;
      console.log(this.itemsData,"=========response data") //this itemdata for creation for table
      });
    
  }

  postItems(userObj){
    this._service.postdata(userObj).subscribe(resp=>{console.log(resp,"--------resp---------")})
    this.getItems()
  }

  delete(x){
    this._service.deletedata(x).subscribe(res=>{
      this.getItems()
      console.log(res,'responese delete')})
    this.getItems();
    
  }

  edit(x){
    this.registerForm.patchValue({
      itemId:x.itemId,
      itemName:x.itemName,
      price:x.price,
      quantity:x.quantity
    })
  }

  updatadata(){
    this._service.putData(this.registerForm.value).subscribe(respo=>{
      this.getItems()
      console.log(respo,"updata")})
   
  }
}

