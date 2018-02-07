webpackJsonp([18],{1045:function(t,n){t.exports="/***********************************/\n/**             Profitconfiguration     **/\n/***********************************/\n.content {\n  background: #34495E !important; }\n\n.centered-div {\n  /*    min-width:800px;\r\n    margin:25px auto; */ }\n\n.centered-div h3 {\n  font-size: 22px;\n  color: white; }\n\n.myinputs {\n  border: none;\n  padding-left: 15px;\n  height: 40px;\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-top: 15px; }\n\n.getProfit {\n  margin-top: 15px;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background: #EBC41D;\n  color: #0D192C;\n  border: none;\n  font-size: 18px;\n  font-weight: bold; }\n\n.successalert {\n  width: 392px;\n  margin: 25px auto; }\n\n.failurealert {\n  width: 392px;\n  margin: 25px auto; }\n\n.centered-div h3 {\n  font-size: 22px;\n  font-weight: 500;\n  text-align: center;\n  margin: 35px; }\n"},1084:function(t,n){t.exports='\r\n\r\n<div class="centered-div">\r\n\r\n    <h3>Calculate profit</h3>\r\n\r\n    <div class="row">\r\n\r\n            \r\n\r\n        <div class="col-md-4 col-sm-4 col-xs-12 input-effect">\r\n            <input type="text" class="myinputs" name="merchantProfit" [(ngModel)]="merchantProfit" placeholder="Enter Merchant Profit">\r\n        </div>\r\n\r\n         <div class="col-md-4 col-sm-4 col-xs-12">\r\n            <input type="text" class="myinputs"  name="bitpointProfit" [(ngModel)]="bitpointProfit" placeholder="Enter Bitpoint Profit">\r\n        </div>\r\n\r\n        <div class="col-md-4 col-sm-4 col-xs-12">\r\n            <button class="getProfit" (click)="getProfits()">Get Profits</button>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class="alert alert-success successalert" *ngIf="successalert">\r\n      Your information was successfully recived!\r\n    </div>\r\n    \r\n     <div class="alert alert-danger failurealert" *ngIf="failurealert">\r\n      Both amounts should add upto 100\r\n    </div>\r\n\r\n\r\n\r\n</div>'},696:function(t,n,e){"use strict";var r=e(0),i=e(156);e(242);var o=e(695),a=function(){function TransactionService(t){this.http=t,this.urlService=new o.ServiceUrl}return TransactionService.prototype.getProfitStatisticsByTime=function(t){var n=JSON.stringify({filterTime:t}),e=new i.Headers({"Content-Type":"application/json"}),r=new i.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getProfitStatisticsByTime",n,r).map(function(t){return t.json()})},TransactionService.prototype.getTransactionStatisticsByTimeRoute=function(t){var n=JSON.stringify({filterTime:t}),e=new i.Headers({"Content-Type":"application/json"}),r=new i.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionStatisticsByTimeRoute",n,r).map(function(t){return t.json()})},TransactionService.prototype.getTransactionData=function(t){var n=JSON.stringify({transactionId:t}),e=new i.Headers({"Content-Type":"application/json"}),r=new i.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionData",n,r).map(function(t){return t.json()})},TransactionService.prototype.getProfitConfiguration=function(t,n){var e=JSON.stringify({merchantProfit:t,bitpointProfit:n}),r=new i.Headers({"Content-Type":"application/json"}),o=new i.RequestOptions({method:"post",headers:r});return this.http.post(this.urlService.baseUrl+"adminConfiguration/addProfitConfiguration",e,o).map(function(t){return t.json()})},TransactionService.prototype.getTransactionDetailsById=function(t){var n=JSON.stringify({merchantId:t}),e=new i.Headers({"Content-Type":"application/json"}),r=new i.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionsByMerchantId",n,r).map(function(t){return t.json()})},TransactionService=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Http&&i.Http)&&t||Object])],TransactionService);var t}();n.TransactionService=a},998:function(t,n,e){"use strict";var r=e(0),i=e(107),o=e(696),a=function(){function Profitconfiguration(t,n){this._transactionService=t,this.successalert=!1,this.failurealert=!1,this.router=n}return Profitconfiguration.prototype.getProfits=function(){var t=this;this.successalert=!1,this.failurealert=!1;var n;if(void 0==this.bitpointProfit)return!1;if(void 0==this.bitpointProfit)return!1;var e=parseFloat(this.bitpointProfit)+parseFloat(this.merchantProfit);e>100||e<100?(n=!0,this.failurealert=!0,console.log(e)):(this.failurealert=!1,n=!1),n||this._transactionService.getProfitConfiguration(this.merchantProfit,this.bitpointProfit).subscribe(function(n){console.log(n),200==n.code?(t.successalert=!0,t.bitpointProfit=void 0,t.merchantProfit=void 0,t.failurealert=!1):t.successalert=!1})},Profitconfiguration=__decorate([r.Component({selector:"Profitconfiguration",styles:[e(1045)],template:e(1084),providers:[o.TransactionService],encapsulation:r.ViewEncapsulation.None}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.TransactionService&&o.TransactionService)&&t||Object,"function"==typeof(n="undefined"!=typeof i.Router&&i.Router)&&n||Object])],Profitconfiguration);var t,n}();n.Profitconfiguration=a},999:function(t,n,e){"use strict";var r=e(74),i=e(155),o=e(0),a=e(107),s=e(998);n.routes=[{path:"",component:s.Profitconfiguration,pathMatch:"full"}];var c=function(){function LoginModule(){}return LoginModule.routes=n.routes,LoginModule=__decorate([o.NgModule({declarations:[s.Profitconfiguration],imports:[r.CommonModule,i.FormsModule,a.RouterModule.forChild(n.routes)]}),__metadata("design:paramtypes",[])],LoginModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=c}});