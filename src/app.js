if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Angular2RocksController = (function () {
    function Angular2RocksController() {
        this.name = "angular 2 rocks";
    }
    Angular2RocksController = __decorate([
        angular2_1.Component({
            // <angular2rocks-app></angular2rocks-app>
            selector: "angular2rocks-app"
        }),
        angular2_1.View({
            template: "<h1>Whats your name? My name is {{name}}</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2RocksController);
    return Angular2RocksController;
})();
angular2_1.bootstrap(Angular2RocksController);
