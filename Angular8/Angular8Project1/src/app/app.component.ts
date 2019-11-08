import { Component } from '@angular/core'

@Component({
    selector: "app-root",
    templateUrl: "app.component.html"
})
export class AppComponent {
    name: string;
    games = ['hockey', 'cricket', 'polo'];
    emp = { 'eid': 101, 'ename': "Adi" };
    emps = [
        { 'eid': 104, 'ename': "Adi Soumitra Mondal", 'gender': 'F', 'sal': 35000, 'retired': false, 'doj': new Date('2011-01-02') },
        { 'eid': 105, 'ename': "Soumitra Mondal", 'gender': 'F', 'sal': 45000, 'retired': true, 'doj': new Date('1994-01-06') },
        { 'eid': 106, 'ename': "Soumitra Mondal Adi", 'gender': 'M', 'sal': 55000, 'retired': false, 'doj': new Date('2016-01-02') },
        { 'eid': 107, 'ename': "Adi Mondal", 'gender': 'M', 'sal': 65000, 'retired': true, 'doj': new Date('1996-01-03') },
        { 'eid': 108, 'ename': "Mondal Adi Soumitra", 'gender': 'F', 'sal': 45000, 'retired': false, 'doj': new Date('2008-01-02') }
    ];
    constructor() {
        this.name = 'Adi'
        this.games.push('football');
    }
}