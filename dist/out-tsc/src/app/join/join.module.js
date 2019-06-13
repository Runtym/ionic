import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JoinPage } from './join.page';
var routes = [
    {
        path: '',
        component: JoinPage
    }
];
var JoinPageModule = /** @class */ (function () {
    function JoinPageModule() {
    }
    JoinPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                ReactiveFormsModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [JoinPage]
        })
    ], JoinPageModule);
    return JoinPageModule;
}());
export { JoinPageModule };
//# sourceMappingURL=join.module.js.map