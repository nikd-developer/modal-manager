import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var AlertModal = /** @class */ (function () {
    function AlertModal(activeModal) {
        this.activeModal = activeModal;
    }
    AlertModal.decorators = [
        { type: Component, args: [{
                    selector: 'app-alert-modal',
                    templateUrl: './alert-modal.component.html'
                },] },
    ];
    /** @nocollapse */
    AlertModal.ctorParameters = function () { return [
        { type: NgbActiveModal, },
    ]; };
    AlertModal.propDecorators = {
        "inputs": [{ type: Input },],
    };
    return AlertModal;
}());
export { AlertModal };
//# sourceMappingURL=alert-modal.component.js.map