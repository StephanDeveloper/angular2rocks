/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    // <angular2rocks-app></angular2rocks-app>
    selector: "angular2rocks-app"
})
@View({
    template: "<h1>Whats your name? My name is {{name}}</h1>"
})

class Angular2RocksController {
    name:string;

    constructor() {
        this.name = "angular 2 rocks";
    }
}

bootstrap(Angular2RocksController);