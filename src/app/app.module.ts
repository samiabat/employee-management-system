import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared.module';
import { DemoFallbackInterceptor } from './interceptors/demo-fallback.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgxsModule.forRoot([], {
      developmentMode: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DemoFallbackInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
