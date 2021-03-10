import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private service:HttpClient) { }
  
  // create data means save items
  createNewUser(userObj:any)
  {
  return  this.service.post('http://localhost:8989/item/saveitem',userObj)
  }

//  gettting data .total data getting based on price.
  fetch(){
   return this.service.get('http://localhost:8989/item/getAllItem/1000000')
  }

//  post data .calculate bill
  postdata(userObj:any){
    return this.service.post('http://localhost:8989/item/bill',userObj)
  }

// delete data .delete items
deletedata(x){
  return this.service.delete('http://localhost:8989/item/deleteItem/'+x)
}

//put data update items
putData(x){
  return this.service.put('http://localhost:8989/item/updateItems',x)
  
}

}
