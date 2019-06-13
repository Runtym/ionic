import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var baseUrl = "http://localhost:88";
var CommonService = /** @class */ (function () {
    function CommonService(_http) {
        this._http = _http;
        var params = { id: 'test', pwd: 'test' };
        console.log(this.makeQuery(params));
    }
    CommonService.prototype.makeQuery = function (params) {
        var query = '?';
        for (var key in params) {
            query += key + '=' + params[key] + '&';
        }
        return query;
    };
    CommonService.prototype.get = function (url, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                url = baseUrl + url;
                return [2 /*return*/, this._http.get(url)];
            });
        });
    };
    CommonService.prototype.post = function (url, params) {
        url = baseUrl + url;
        return this._http.post(url, params, httpOptions);
    };
    CommonService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=common.service.js.map