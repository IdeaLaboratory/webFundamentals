import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'gender'
})

export class GenderPipe implements PipeTransform {
    transform(g) {
        let result = 'male';
        if (g === 'F') {
            result = 'female'
        }
        return result;
    }
}