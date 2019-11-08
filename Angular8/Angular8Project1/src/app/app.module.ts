import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from './gender.pipe';
import { RetiredPipe } from './retired.pipe';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [AppComponent, AnotherComponent, NestedComponent, GenderPipe, RetiredPipe],
    bootstrap: [AppComponent, AnotherComponent, NestedComponent]
})

export class AppModule {

}