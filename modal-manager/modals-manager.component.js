import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalsManagerService } from './modals-manager.service';
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
        this.modalRef = this.modalService.open(state.component, state.options || {});
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
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
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
        { type: Component, args: [{
                    selector: 'app-modal-manager, [app-modal-manager]',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ModalsManagerComponent.ctorParameters = function () { return [
        { type: ModalsManagerService, },
        { type: NgbModal, },
    ]; };
    return ModalsManagerComponent;
}());
export { ModalsManagerComponent };
//# sourceMappingURL=modals-manager.component.js.map