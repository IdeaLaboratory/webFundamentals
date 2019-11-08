import { Component } from "@angular/core";
import { RESTAPIService } from './restapi.service';

//@injectable not require. I am allowing DI in this class.
@Component({
    selector: 'service',
    template: `<h1>HTTP service</h1>
    <table border=2>
    <tr *ngFor="let e of post">
    <td>{{e.userID}}</td>
    <td>{{e.id}}</td>
    </tr>
    </table>`,
    providers: [RESTAPIService]
})
export class CallServiceComponent {
    post;
    constructor(private ser: RESTAPIService) /*DI*/ {
        this.ser.getData().subscribe(x => this.post = x
        )
    }
}