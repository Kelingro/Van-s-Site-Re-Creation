import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MyInfor } from './My-Infor.model';


@Injectable()
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  NewInfo: MyInfor | undefined;

  constructor(private http: HttpClient) { 

  }
  ngOnInit(): void {
    console.log("Getting information from server...");
    this.getMyInfo();
    console.log("Registering showMyInfo as a subscriber...");
    this.showMyInfo();
  }

  getMyInfo(){
    return this.http.get<MyInfor>('https://vans-recreation-default-rtdb.firebaseio.com/My-Info.json');
  }

  showMyInfo()  {
    this.getMyInfo().subscribe((data: MyInfor) =>{
      console.log(data);
      this.NewInfo = data;
    })
  }

}
