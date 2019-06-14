import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  board:any[] = [];
  constructor() { }

  ngOnInit() {
    this.addData()
  }
  addData(){
    var cnt = this.board.length;
    for(var i=cnt+1;i<=cnt+20;i++){
      this.board.push({no:i,title:'테스트'+i});
    }
  }
  loadData(event) {
    setTimeout(() => {
      this.addData();
      event.target.complete();
      if (this.board.length == 60) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
