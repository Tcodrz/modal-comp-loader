import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdbModule } from './../mdb/mdb.module';
import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MdbModule,
    SharedModule,
  ],
  exports: []
})
export class AdminModule { }
