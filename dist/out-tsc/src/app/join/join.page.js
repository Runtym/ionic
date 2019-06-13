import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
var JoinPage = /** @class */ (function () {
    function JoinPage(cs, lc, ac, fBuilder) {
        this.cs = cs;
        this.lc = lc;
        this.ac = ac;
        this.fBuilder = fBuilder;
        this.ops = [];
        this.hobbies = [];
    }
    JoinPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.lc.create({
                                message: '..'
                            })];
                    case 1:
                        _a.load = _b.sent();
                        return [4 /*yield*/, this.load.present()];
                    case 2:
                        _b.sent();
                        this.ops.push({ value: 1, text: '서울' });
                        this.ops.push({ value: 2, text: '경기' });
                        this.ops.push({ value: 3, text: '대전' });
                        return [4 /*yield*/, this.cs.get('/hobbies').subscribe(function (res) {
                                _this.hobbies = res;
                            }, function (err) {
                                console.log(err);
                            })];
                    case 3:
                        _b.sent();
                        this.joinForm = this.fBuilder.group({
                            'id': [null, Validators.required],
                            'pwd': [null, Validators.required],
                            'name': [null, Validators.required],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    JoinPage.prototype.ngAfterViewInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('clear');
                this.load.dismiss();
                return [2 /*return*/];
            });
        });
    };
    JoinPage.prototype.doLogin = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ac.create({
                            message: '잘지내나요?',
                            buttons: [
                                {
                                    text: 'Yes',
                                    handler: function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                        var loading, url;
                                        return tslib_1.__generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.lc.create({
                                                        message: '회원가입중'
                                                    })];
                                                case 1:
                                                    loading = _a.sent();
                                                    return [4 /*yield*/, loading.present()];
                                                case 2:
                                                    _a.sent();
                                                    url = '/join';
                                                    this.cs.post(url, form).subscribe(function (res) {
                                                        console.log(res);
                                                        loading.dismiss();
                                                    }, function (err) {
                                                        console.log(err);
                                                        loading.dismiss();
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                {
                                    text: 'No'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JoinPage = tslib_1.__decorate([
        Component({
            selector: 'app-join',
            templateUrl: './join.page.html',
            styleUrls: ['./join.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CommonService,
            LoadingController,
            AlertController,
            FormBuilder])
    ], JoinPage);
    return JoinPage;
}());
export { JoinPage };
//# sourceMappingURL=join.page.js.map