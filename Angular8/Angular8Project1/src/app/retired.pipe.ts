import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'retired'
})
export class RetiredPipe implements PipeTransform {
    transform(isWorking: boolean): string {
        let result = "Still Working";
        if (isWorking) {
            result = 'Not working';
        }
        return result;
    }
}