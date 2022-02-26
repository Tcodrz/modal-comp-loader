import { NgModule } from '@angular/core';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    ButtonsModule,
    InputsModule,
    ModalModule,
    WavesModule,
  ],
  exports: [
    ButtonsModule,
    InputsModule,
    ModalModule,
    WavesModule,
  ]
})
export class MdbModule { }
