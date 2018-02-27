import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export declare class ModalsManagerService {
    modal: ModalManagerState;
    modalManagerSubject: BehaviorSubject<ModalManagerState>;
    constructor();
    getModalListener(): Observable<ModalManagerState>;
    showModal(state: ModalManagerState): void;
    destroyModal(): void;
    modalState(): ModalManagerState;
}
export interface ModalManagerState {
    action?: boolean;
    payload?: any;
    component: any;
    callback?: any;
}
