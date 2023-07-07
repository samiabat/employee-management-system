import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared.module';
import { ComponentComponent } from './component/component.component';
import { SecurityRoutingModule } from './security-routing.module';
import { AuthenticationState } from './store/authentication.states';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule, 
    SecurityRoutingModule,
    NgxsModule.forFeature([AuthenticationState]),
  ],
})
export class SecurityModule {}