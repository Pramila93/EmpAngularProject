import { Injectable } from "@angular/core";
import { User } from '../models/user';

@Injectable()
export class UserService{
    user:User[]=[
        {uname:"pama",pwd:"Pama12345"},
        {uname:"abc",pwd:"Abc12345"}
    ]
}