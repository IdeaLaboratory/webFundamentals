import { Component } from "@angular/core";
import { RESTAPIService } from './restapi.service';

//@injectable not require. I am allowing DI in this class.
@Component({
    selector: 'service',
    template: "<h1>HTTP service</h1>",
    providers: [RESTAPIService]
})
export class CallServiceComponent {
    constructor(private ser: RESTAPIService) /*DI*/ {
        this.ser.getData().subscribe(x => console.log(x)
        )
    }
}