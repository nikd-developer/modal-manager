(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/BehaviorSubject'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/BehaviorSubject', '@ng-bootstrap/ng-bootstrap', '@angular/common'], factory) :
	(factory((global.modal = global.modal || {}, global.modal.manager = {}),global.ng.core,global.BehaviorSubject,global.ngBootstrap,global.common));
}(this, (function (exports,core,BehaviorSubject,ngBootstrap,common) { 'use strict';

var ModalsManagerService = /** @class */ (function () {
    function ModalsManagerService() {
        this.modal = {
            action: false,
            component: null
        };
        this.modalManagerSubject = new BehaviorSubject.BehaviorSubject(this.modalState());
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
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ModalsManagerService.ctorParameters = function () { return []; };
    return ModalsManagerService;
}());

var ModalsManagerComponent = /** @class */ (function () {
    function ModalsManagerComponent(modalManagerService, modalService) {
        this.modalManagerService = modalManagerService;
        this.modalService = modalService;
    }
    ModalsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.modalManagerService.getModalListener().subscribe(function (state) {
            if (state.action) {
                if (_this.modalRef) {
                    _this.modalRef.dismiss('forcefully destroy by another modal');
                }
                _this.open(state);
            }
            else {
                if (_this.modalRef) {
                    _this.modalRef.dismiss('destroy forcefully');
                }
            }
        });
    };
    ModalsManagerComponent.prototype.open = function (state) {
        this.modalRef = this.modalService.open(state.component);
        this.modalRef.componentInstance.inputs = state.payload || {};
        this.modalRef.result.then(function (result) {
            if (state.callback) {
                result = {
                    state: true,
                    result: result
                };
                state.callback(result);
            }
        }, function (reason) {
            if (state.callback) {
                reason = {
                    state: false,
                    result: reason
                };
                state.callback(reason);
            }
        });
    };
    ModalsManagerComponent.prototype.getDismissReason = function (reason) {
        if (reason === ngBootstrap.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ngBootstrap.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalsManagerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ModalsManagerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-modal-manager, [app-modal-manager]',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ModalsManagerComponent.ctorParameters = function () { return [
        { type: ModalsManagerService, },
        { type: ngBootstrap.NgbModal, },
    ]; };
    return ModalsManagerComponent;
}());

var AlertModal = /** @class */ (function () {
    function AlertModal(activeModal) {
        this.activeModal = activeModal;
    }
    AlertModal.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-alert-modal',
                    templateUrl: './alert-modal.component.html'
                },] },
    ];
    /** @nocollapse */
    AlertModal.ctorParameters = function () { return [
        { type: ngBootstrap.NgbActiveModal, },
    ]; };
    AlertModal.propDecorators = {
        "inputs": [{ type: core.Input },],
    };
    return AlertModal;
}());

var ModalsManagerModule = /** @class */ (function () {
    function ModalsManagerModule() {
    }
    ModalsManagerModule.decorators = [
        { type: core.NgModule, args: [{
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
                        common.CommonModule
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

exports.ModalsManagerComponent = ModalsManagerComponent;
exports.ModalsManagerModule = ModalsManagerModule;
exports.ModalsManagerService = ModalsManagerService;
exports.AlertModal = AlertModal;

Object.defineProperty(exports, '__esModule', { value: true });

})));