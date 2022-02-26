import { OneComponent } from './../../../admin/components/one/one.component';
import { ModalParams, ModalsService } from 'src/app/core/services/modals.service';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  @ViewChild('basicModal', { static: true }) basicModal: ModalDirective;
  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  params: ModalParams;
  componentRef: ComponentRef<unknown>;
  constructor(
    private _modals: ModalsService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }
  ngOnInit(): void { this._modals.register(this.basicModal); }
  onOpen(event) {
    this.params = this._modals.getParams();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.params.component);
    this.componentRef = this.viewContainer.createComponent(componentFactory);
    (this.componentRef.instance as OneComponent).inputs = this.params;
  }
  onClose(event) { this.componentRef.destroy(); }

}
