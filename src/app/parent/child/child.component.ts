import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked {
  data: any;
  @Input() parentData: any;
  @Input() parentname:any;
  @Output() sentData: EventEmitter<string>=new EventEmitter<string>();
  @Input() familymeber:any;
  @Input()childcheck: any;
  status:string=""
  constructor() { }
//خاص ب ال child
ngAfterContentInit(): void {
console.log('content init');

}
//خاص ب ال child
ngAfterContentChecked(): void {
console.log('content checked');

}
  ngDoCheck() {
    console.log('somethingchange');

  }
//   ngOnChanges(change:SimpleChanges) {
//  console.log(change)
//   }

  ngOnInit(): void {
  }

getData(){
 if (this.parentname>25) {
   this.status='good'
 } else if (this.parentname>50) {
  this.status='good'
 }else if (this.parentname>75){
  this.status='very good'
 }


 return this.status;
}
}
