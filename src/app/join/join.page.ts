import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { CssKeyframesDriver } from '@angular/animations/browser/src/render/css_keyframes/css_keyframes_driver';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';


@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {
  joinForm : FormGroup;
  ops : any[] = [];
  hobbies : any[] = [];
  constructor(private cs:CommonService,
    private lc:LoadingController,
    private ac:AlertController,
    private fBuilder:FormBuilder
    ) { 

  }

  ngOnInit() {
    this.ops.push({value:1,text:'서울'});
    this.ops.push({value:2,text:'경기'});
    this.ops.push({value:3,text:'대전'});

    this.cs.get<any[]>('/hobbies').subscribe(
      res=>{
        this.hobbies = <any[]>res;
      }
    )

    this.joinForm = this.fBuilder.group({
      'id' : [null,Validators.required],
      'pwd' : [null,Validators.required],
      'name' : [null,Validators.required],
    })
  }

  async doLogin(form:NgForm){
    var alert = await this.ac.create({
      message:'잘지내나요?',
      buttons:[
        {
          text:'Yes',
          handler:async data=>{
            var loading = await this.lc.create({
              message:'회원가입중'
            });
            await loading.present();
            var url = '/join';
            this.cs.post(url,form).subscribe(
              res=>{
                console.log(res);
                loading.dismiss();
              },
              err=>{
                console.log(err);
                loading.dismiss();
              }
            );
          }
        }
        ,
        {
          text:'No'
        }
      ]
    })
    await alert.present();
  }
}
