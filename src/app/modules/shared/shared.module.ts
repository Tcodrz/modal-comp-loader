import { OneComponent } from './../admin/components/one/one.component';
import { MdbModule } from './../mdb/mdb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OneComponent, // doesnt have to be declared, can still be rendered in generic-modal.component
  ],
  imports: [
    CommonModule,
    MdbModule // disable to ignore MDBootstrap
  ],
  exports: [
  ]
})
export class SharedModule { }
