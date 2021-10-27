import { Component,OnInit } from '@angular/core';

export class MyItems {
  
  Value: any;
  Value1: any;
  constructor(Value:any,Value1:any)
  {
    this.Value = Value;
    this.Value1 = Value1;
  }
}
  
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee App';
  myid: MyItems[] = new Array();
  myItems:MyItems[] = new Array();
userdata=['myid','myItems']
 
  IsForUpdate: boolean = false;
  newid: any = {};
  newItem: any = {};
  updatedItem:any;
  
  AddItem() {
    this.myItems.push(
      this.newItem
     
    );

    this.myid.push(
      this.newid
    );
    console.log();
    this.newItem = {};
    this.newid = {};
    
  }

  
   EditItem(i:any) {
    this.newItem.Value = this.myItems[i].Value;
    this.newid.Value = this.myid[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

 
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
        this.myid[i].Value = this.newid.Value;
      }
    }

    this.IsForUpdate = false;
    this.newItem = {};
    this.newid = {}
  }

  
  DeleteItem(i:any) {
    this.myItems.splice(i, 1);
    this.myid.splice(i, 1);
  }
  
}


    
      
    
    
                