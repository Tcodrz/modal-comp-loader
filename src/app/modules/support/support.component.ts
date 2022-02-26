import { OneComponent } from './../admin/components/one/one.component';
import { ModalsService, ModalParams } from 'src/app/core/services/modals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  constructor(
    private _modals: ModalsService,
  ) { }
  ngOnInit(): void { }
  onSubmit() {
    const params: ModalParams = { component: OneComponent };
    this._modals.show(params);
  }
}
