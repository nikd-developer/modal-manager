import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ModalsManagerService = /** @class */ (function () {
    function ModalsManagerService() {
        this.modal = {
            action: false,
            component: null
        };
        this.modalManagerSubject = new BehaviorSubject(this.modalState());
    }
    ModalsManagerService.prototype.getModalListener = function () {
        return this.modalManagerSubject.asObservable();
    };
    ModalsManagerService.prototype.showModal = function (state) {
        state.action = true;
        this.modalManagerSubject.next(state);
    };
    ModalsManagerService.prototype.destroyModal = function () {
        this.modalManagerSubject.next({ action: false, component: null });
    };
    ModalsManagerService.prototype.modalState = function () {
        return this.modal;
    };
    ModalsManagerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ModalsManagerService.ctorParameters = function () { return []; };
    return ModalsManagerService;
}());
export { ModalsManagerService };
//# sourceMappingURL=modals-manager.service.js.map