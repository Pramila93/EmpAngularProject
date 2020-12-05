import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService{

    emp:Employee[]=[
        {eid:10,ename:'abc',gender:"F",salary:20000},
        {eid:20,ename:"pqr",gender:"M",salary:30000},
        {eid:30,ename:"xyz",gender:"F",salary:32000}
    ]
}