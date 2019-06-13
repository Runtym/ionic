import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {

  constructor(private ac:ActionSheetController) { }

  ngOnInit() {
  }
  async popSheet(){
    var asc = await this.ac.create({
      header:'test',
      buttons:[
        {
          text:'카카오',
          handler:()=>{
            console.log('카카오선택!');
          }
        },
        {
          text:'네이버',
          handler:()=>{
            console.log('네이버 선택!');
          }
        },
        {
          text:'페이스북',
          handler:()=>{
            console.log('페이스북 선택!');
          }
        },
      ]
    });
    await asc.present();
  }

}
