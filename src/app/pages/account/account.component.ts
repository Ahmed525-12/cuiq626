import { element } from 'protractor';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test1 =[{
    name:"shahyen",
    imgn:" sayed",
    age:18,
    id:1


  },
  {
    name:"omar",
    imgn:" sayed",
    age:24,
    id:2


  },{
    name:"khaled",
    imgn:" sayed",
    age:22,
    id:3


  },{
    name:"ahmed",
    imgn:" sayed",
    age:19,

  }

  ]
  search=""
//   delf(event:any){
// event.setAttribute("contenteditable","true")
//   }
// deleteMsg(item:any){
//   delete this.test1[item];
//   console.log(this.test1)

// }
deleteMsg(element:any) {
this.test1.forEach((value,index)=>{
  if (value==element) {
    this.test1.splice(index,1)
  }

})
}
}
 // this.test1.splice(i, 1)
