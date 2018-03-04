# Dynamic Modal To Body
Adding modal from component instead of HTML

### Table of Contents:
---

1. [Installation](#install)
2. [Example](#example)


### <a name="install"></a> Installation:

```shell
npm install modals-manager@latest --save
```

Following are the things you must have before installation:-
1. [Angular CLI](#angular-cli)
2. [Bootstarp 4.0](#bootstrap)
3. [NgxBootstrap](#ngxbootstrap)

### <a name="angular-cli"></a> Angular CLI:
Installation guide [Angular CLI](https://cli.angular.io/)

### <a name="bootstrap"></a> Bootstrap:
Installation guide [Bootstrap 4 with css or scss](https://stackoverflow.com/questions/45660802/how-to-use-bootstrap-4-with-sass-in-angular)

### <a name="ngxbootstrap"></a> NgxBootstrap
Installation guide [NgxBootstrap](https://valor-software.com/ngx-bootstrap/#/)


### <a name="example"></a> Step are as follow:

Step1: Include Modals Manager in your application

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalsManagerModule } from 'modals-manager';
@NgModule({
  imports: [
    BrowserModule,
    ModalsManagerModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
```

Step2. Create a dynamic modal and add it as entry component in application
```ts
// alert.component.ts
import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-alert-modal',
    templateUrl: 'alert-modal.component.html'
})
export class AlertModal {
    @Input() inputs;
    constructor(public activeModal: NgbActiveModal) {
    }
}
```
```html
<!-- alert.component.html -->
<div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body">
    <p>Hello, {{inputs.name}}!</p>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
</div>
```

Step3. Declare modal in application

```ts
...
import { AlertModal } from './alert-modal.component';
@NgModule({
  declarations: [ 
      ...,
    AlertModal
   ],
  entryComponents: [
      ...,
    AlertModal
  ]
})
export class AppModule {
    ...
}
```


Step4. Open modal from component

```ts
// app.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalsManagerModule, ModalsManagerService } from 'modals-manager';
import { AlertModal } from './alert-modal.component';
@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent{
    constructor(private modalsManagerService: ModalsManagerService ) {
    }
    openModal() {
        this.modalsManagerService.showModal({
            component: AlertModal,
            callback: (result) => {
                console.log(result);
            },
            payload: {
                name: 'BIZ TECNO'
            }
        })
    }
}
```

```html
<button class="btn btn-lg btn-outline-primary" (click)="openModal()">Launch Alert modal</button>
```