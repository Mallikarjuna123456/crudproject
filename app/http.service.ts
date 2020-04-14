import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable();
export class httpService{
    constructor(private httpServ:HttpClient){}
    getData(){
        return this.httpServ.get('                 https://jsonplaceholder.typicode.com/posts');
    }
}