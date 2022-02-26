import { OneComponent } from './../components/one/one.component';
import { Component, OnInit } from '@angular/core';
import { ModalsService } from 'src/app/core/services/modals.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(
    private _modals: ModalsService,
  ) { }
  ngOnInit(): void { }
  openModal() { this._modals.show({ component: OneComponent }); }
}
