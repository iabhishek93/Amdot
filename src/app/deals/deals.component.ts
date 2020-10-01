import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
 
  open(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    let param = target.attributes.id.nodeValue;
    const headers = { 'content-Type':
    'application/json'}
    this.httpClient.post('http://localhost:8080/deals', { parameter: param },
      { headers: headers }).subscribe((data) => {
        console.log(data);
      })
  } 
}