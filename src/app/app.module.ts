import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './demoComponentForDataBinding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './demoComponentForDataBinding/property-binding/property-binding.component';
import { EventBindingComponent } from './demoComponentForDataBinding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './demoComponentForDataBinding/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventBindingComponent]
})
export class AppModule { }
