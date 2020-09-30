import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test0Component } from './test0/test0.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test0Component,
    Test4Component,
    Test5Component,
    Test6Component,
    Test7Component,
    Test8Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
