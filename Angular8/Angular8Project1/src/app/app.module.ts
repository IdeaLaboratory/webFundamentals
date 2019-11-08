import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from './gender.pipe';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AnotherComponent, NestedComponent, GenderPipe],
    bootstrap: [AppComponent, AnotherComponent, NestedComponent]
})

export class AppModule {

}