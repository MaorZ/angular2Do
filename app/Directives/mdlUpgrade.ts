import {Directive, Input, ElementRef} from "angular2/core";

@Directive({
    selector: '[mdlUpgrade]'
})
export class MdlUpgradeDirective {
    @Input() mglUpgrade;

    constructor(el: ElementRef) {
        componentHandler.upgradeElement(el.nativeElement);
    }
}