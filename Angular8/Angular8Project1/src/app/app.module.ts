import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from './gender.pipe';
import { RetiredPipe } from './retired.pipe';
import { HttpClientModule } from "@angular/common/http";
import { CallServiceComponent } from './callService.component';
import { TFormComponent } from './tform.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [AppComponent, AnotherComponent, NestedComponent, GenderPipe, RetiredPipe,
        CallServiceComponent, TFormComponent, AbcComponent],
    bootstrap: [AppComponent, AnotherComponent, NestedComponent]
})

export class AppModule {

}