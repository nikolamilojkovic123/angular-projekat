import { Component } from '@angular/core';
@Component
({
    selector: 'worning-alert',
    styles:[`
        p{
         color: darkgrey;
         border: solid black 1px;
         background-color: red;
         padding: 20px;
        }
    `],
    template: ` <p>worning alert component</p>`
})
export class WorningAlertComponent
{

}