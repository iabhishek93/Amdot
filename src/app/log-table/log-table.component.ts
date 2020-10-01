import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }

  show: boolean = false;
  selectedType = "select";
  resData: any;
  searchData: any;
  detailRedirectData: any;
  ngOnInit() {
  }

  getLogData() {

    const headers = {
      'content-Type':
        'application/json'
    }

    if (this.selectedType == 'redirectLog') {
      this.show = true;
      this.httpClient.post('http://localhost:8080/redirectLog', { parameter: 'redirectLog' },
        { headers: headers }).subscribe((data) => {
          let produrl = data['dbResp'];
          for (let i of produrl) {
            if ((i['redirLog']['prodURI']).search('amazon') > 0) {
              i['redirLog']['prodURI'] = 'amazon';
            }
            else if ((i['redirLog']['prodURI']).search('shopclues') > 0) {
              i['redirLog']['prodURI'] = 'shopclues';
            }
            else if ((i['redirLog']['prodURI']).search('flipkart') > 0) {
              i['redirLog']['prodURI'] = 'flipkart';
            }
          }
          this.resData = produrl;
        })
    }

    else if (this.selectedType == 'searchLog') {
      this.show = true;
      this.httpClient.post('http://localhost:8080/searchLog', { parameter: 'searchLog' },
        { headers: headers }).subscribe((data) => {
          this.searchData = data['dbResp'];
        })
    }

    else if (this.selectedType == 'detailRedirect') {
      this.show = true;
      this.httpClient.post('http://localhost:8080/detailRedirectLog', { parameter: 'detailRedirectLog' },
        { headers: headers }).subscribe((data) => {
          let produri = data['dbResp'];
          for (let i of produri) {
            if ((i['redirectUrl']).search('amazon') > 0) {
              i['redirectUrl'] = 'amazon';
            }
            else if ((i['redirectUrl']).search('shopclues') > 0) {
              i['redirectUrl'] = 'shopclues';
            }
            else if ((i['redirectUrl']).search('flipkart') > 0) {
              i['redirectUrl'] = 'flipkart';
            }
          }
          this.detailRedirectData = data['dbResp'];
        })
    }
    console.log('Bye');
  }
}