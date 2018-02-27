import { OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalsManagerService, ModalManagerState } from './modals-manager.service';
import { Subscription } from 'rxjs/Subscription';
export declare class ModalsManagerComponent implements OnInit, OnDestroy {
    private modalManagerService;
    private modalService;
    modalRef: NgbModalRef;
    subscription: Subscription;
    constructor(modalManagerService: ModalsManagerService, modalService: NgbModal);
    ngOnInit(): void;
    open(state: ModalManagerState): void;
    private getDismissReason(reason);
    ngOnDestroy(): void;
}
