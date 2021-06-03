import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { NgControl } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
date=new Date()

  @ViewChild(ChildComponent)progressTest!: ChildComponent;


  @ViewChild('pargaph')pa: any;
  model!: number;
  asa!: number;

inCommingData:any
counter=100;
isMeber(){
  return 'yes he is meber'
}
imgpath=[
 {
   url:'https://via.placeholder.com/150',
   class:'bg-danger'
 },
 {
  url:'https://via.placeholder.com/150',
  class:'bg-warning'
},
{
  url:null,
  class:'bg-white'
},
{
  url:'https://via.placeholder.com/150',
  class:'bg-info'
},

]
  constructor() { }

  ngOnInit(): void {
  }
  // isMeber(){
  //   return 'yes he is meber'
  // }
itemn=[10,2030,40]

presnt=[
  {
    name:"angular",
    nspa:"w-25",
    color:"bg-danger",
    size:25
  },
  {
    name:"bootstrap",
    nspa:"w-50",
    color:"bg-info",
    size:50
  },
  {
    name:"html",
    nspa:"w-75",
    color:"bg-warning",
    size:75
  },
]

family=[{
  name:"as",
  imgn:"https://via.placeholder.com/150",
  age:"18"


},
{
  name:"de",
  imgn:"https://via.placeholder.com/150",
  age:"24"


},{
  name:"fd",
  imgn:"https://via.placeholder.com/150",
  age:"22"


},{
  name:"ahmed",
  imgn:"assets/https://via.placeholder.com/150",
  age:"19"
}

]
result:any;

  keyUP(event:any){
    this.counter=event.target.value
  }
  getChildData(){
   this.result= this.progressTest.getData()
   this.pa.nativeElement.innerText=this.result
  }
  senddatac: any;
 test1 =[{
    name:"shahyen",
    imgn:" sayed",
    age:18


  },
  {
    name:"omar",
    imgn:" sayed",
    age:24


  },{
    name:"khaled",
    imgn:" sayed",
    age:22


  },{
    name:"ahmed",
    imgn:" sayed",
    age:19
  }

  ]
  search=""

}


