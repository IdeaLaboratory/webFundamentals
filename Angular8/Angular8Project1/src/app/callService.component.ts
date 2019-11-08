import { Component } from "@angular/core";
import { RESTAPIService } from './restapi.service';

//@injectable not require. I am allowing DI in this class.
@Component({
    selector: 'service',
    templateUrl: "callService.component.html",
    providers: [RESTAPIService]
})
export class CallServiceComponent {
    post;
    constructor(private ser: RESTAPIService) /*DI*/ {
        this.ser.getData().subscribe(x => this.post = x
        )
    }
}