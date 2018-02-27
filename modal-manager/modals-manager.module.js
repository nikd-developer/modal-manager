import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsManagerService } from './modals-manager.service';
import { ModalsManagerComponent } from './modals-manager.component';
var ModalsManagerModule = /** @class */ (function () {
    function ModalsManagerModule() {
    }
    ModalsManagerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalsManagerComponent
                    ],
                    exports: [
                        ModalsManagerComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        ModalsManagerService
                    ]
                },] },
    ];
    /** @nocollapse */
    ModalsManagerModule.ctorParameters = function () { return []; };
    return ModalsManagerModule;
}());
export { ModalsManagerModule };
//# sourceMappingURL=modals-manager.module.js.map