import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  message: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/welcome').subscribe(data => {
      console.log('DATA', data);
      this.message = data['message'];
    })
  }
}
