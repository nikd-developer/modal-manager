import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsManagerService } from './modals-manager.service';
import { ModalsManagerComponent } from './modals-manager.component';
import { AlertModal } from './modals/alert-modal/alert-modal.component';
var ModalsManagerModule = /** @class */ (function () {
    function ModalsManagerModule() {
    }
    ModalsManagerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalsManagerComponent,
                        AlertModal
                    ],
                    exports: [
                        ModalsManagerComponent,
                        AlertModal
                    ],
                    entryComponents: [
                        AlertModal
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