import { Component } from '@angular/core'

@Component({
    selector: "app-root",
    template: `<h1>My First Component by {{name}}</h1>
    <nested></nested>
    <h2>Hi</h2>
    <h1><i>{{games}}</i></h1>
    <ul>
    <li *ngFor="let g of games">{{g}}</li>
    </ul>
    {{emp| json}}<br>
    {{emp.eid+' '+emp.ename}}<br>
    <table border='1'>
        <tr *ngFor="let e of emps">
        <td>{{e.eid}}</td>
        <td>{{e.ename}}</td>
        <td>{{e.ename   | slice:2}}</td>
        <td>{{e.ename   | slice:2:-3}}</td>
        <td>{{e.gender  | gender}}</td>
        <td>{{e.sal | currency:"INR"}}</td>
        <td>{{e.retired}}</td>
        <td>{{e.doj | date:'dd/MM/yyyy'}}</td>
        </tr>
    </table>`                                                           /*{{emps|json}}*/
})
export class AppComponent {
    name: string;
    games = ['hockey', 'cricket', 'polo'];
    emp = { 'eid': 101, 'ename': "sajana" };
    emps = [
        { 'eid': 104, 'ename': "Adi Soumitra Mondal", 'gender': 'F', 'sal': 35000, 'retired': false, 'doj': new Date('2011-01-02') },
        { 'eid': 105, 'ename': "Soumitra Mondal", 'gender': 'F', 'sal': 45000, 'retired': true, 'doj': new Date('1994-01-06') },
        { 'eid': 106, 'ename': "Soumitra Mondal Adi", 'gender': 'M', 'sal': 55000, 'retired': false, 'doj': new Date('2016-01-02') },
        { 'eid': 107, 'ename': "Adi Mondal", 'gender': 'M', 'sal': 65000, 'retired': true, 'doj': new Date('1996-01-03') },
        { 'eid': 108, 'ename': "Mondal Adi Soumitra", 'gender': 'F', 'sal': 45000, 'retired': false, 'doj': new Date('2008-01-02') }
    ];
    constructor() {
        this.name = 'Sajana'
        this.games.push('football');
    }
}