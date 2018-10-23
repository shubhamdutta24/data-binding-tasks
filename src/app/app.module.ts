import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component01Component } from './scenario2/component01/component01.component';
import { ParentComponent } from './scenario3/parent/parent.component';
import { ChildComponent } from './scenario3/child/child.component';
import { Parent4Component } from './scenario4/parent4/parent4.component';
import { Child4Component } from './scenario4/child4/child4.component';
import { Comp3Component } from './scenario5/comp3/comp3.component';
import { Comp2Component } from './scenario5/comp2/comp2.component';
import { Comp1Component } from './scenario5/comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component01Component,
    ParentComponent,
    ChildComponent,
    Parent4Component,
    Child4Component,
    Comp3Component,
    Comp2Component,
    Comp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
