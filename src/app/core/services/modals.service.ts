import { Injectable } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

export interface ModalParams {
  component: any;
}

@Injectable({ providedIn: 'root' })
export class ModalsService {
  private modal: ModalDirective;
  private params: ModalParams;
  constructor() { }
  register(modal: ModalDirective) { this.modal = modal; }
  private openModal() { this.modal.show(); }
  show(params: ModalParams) {
    this.params = params;
    this.openModal();
  }
  getParams() { return this.params; }
}
