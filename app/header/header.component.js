"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var trackscroll_directive_1 = require('../directives/trackscroll.directive');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.shrinkCssClass = '';
        this.cssStringClass = 'abc';
        this.sdegree = 0;
    }
    HeaderComponent.prototype.onScrolled = function (yPos) {
        this.shrinkCssClass = yPos ? "shrink-header" : "";
        if (yPos > '644') {
            document.getElementById('sidebar').setAttribute("style", "position:fixed;  top:70px");
        }
        if (yPos > '1538') {
            this.sdegree += 3;
            this.translate = 'translateY(-' + this.sdegree + 'px)';
            console.log();
            document.getElementById('sidebar').setAttribute("style", "position:absolute; right:45px; margin-top:890px;");
        }
        if (yPos < '644') {
            document.getElementById('sidebar').removeAttribute('style');
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            templateUrl: 'app/header/header.component.html',
            styleUrls: ['app/header/header.component.css'],
            directives: [trackscroll_directive_1.TrackScrollDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map