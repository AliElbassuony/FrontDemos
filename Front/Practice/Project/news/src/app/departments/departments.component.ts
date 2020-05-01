import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './departments.model';
import { Alert } from 'selenium-webdriver';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
 
  departments:Department[]=[];
  httpClient:HttpClient;
  isPageLoaded = false;
  ShowInMainMenu = true;
  constructor(private _httpClient:HttpClient) { }
 
  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/news/departments").subscribe(
      response => {
        this.departments = response as Department[];
        this.isPageLoaded = true;
        this.ShowInMainMenu=true;
      },
      error => {
        alert("Sorry Error !");
      });
  }
add(name:string)
{
  let department = new Department();
  department.Name = name;
  this._httpClient.post("http://api.mohamed-sadek.com/news/departments",department).subscribe(
    response => {
      department.ID = response as number;
      this.departments.push(department);
    },
      error => {}
    
  );
}

}