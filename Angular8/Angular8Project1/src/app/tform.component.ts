import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tform',
    templateUrl: "tform.component.html"
})

export class TFormComponent  {
   OnSubmit(data){
       console.log(data);
   }
}