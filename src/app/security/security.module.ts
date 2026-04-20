import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ComponentComponent } from './component/component.component';
import { SecurityRoutingModule } from './security-routing.module';
@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    SharedModule, 
    SecurityRoutingModule,
  ],
})
export class SecurityModule {}