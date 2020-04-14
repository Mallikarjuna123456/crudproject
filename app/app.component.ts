import { Component } from '@angular/core';
import { httpService } from '../app/http.service';
// import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  abc;
  arr = [];
  constructor(private serv:httpService){
    this.serv.getData().subscribe((res:Response)=>{
      this.abc=res;
    });
    
  }
  showData(){
    this.count++;
    this.abc.forEach(val => {
      
      if(Object.values(val)[0] == this.count){
        this.arr.push(val);
        console.log(this.arr)
        // Object.values(val).forEach((value)=>{
        //   this.arr.push(value);
        // });
      }
      
    });
  }

  
 
}