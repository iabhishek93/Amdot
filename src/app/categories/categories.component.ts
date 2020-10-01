import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private httpClient: HttpClient) { }

  list1 = [
    {
      id: 1, name: 'Mobile', availabilities: [
        { name: 'Phones Under 10,000' },
        { name: 'Phones Under 20,000' },
        { name: 'Latest Phones' },
        { name: 'Best Camera Phones' },
        { name: 'Good Camera Phones' },
        { name: 'Phones Under 30,000 onwards' }
      ]
    },
    {
      id: 2, name: 'Tablets', availabilities: [
        { name: 'Tablets Under 20,000' },
        { name: 'Hybrid Tablets' },
        { name: 'New Launches' },
        { name: 'Tablets with stylus compatibility' },
        { name: 'Tablets with good battery life' },
        { name: 'Best seller Tablets' },
      ]
    },
    {
      id: 3, name: 'Laptops', availabilities: [
        { name: 'Laptops and Desktops' },
        { name: 'Work compatible Laptops' },
        { name: 'Gaming Laptops' },
        { name: 'Laptops with pre-installed Windows 10' },
        { name: 'Laptop and accessories' },
        { name: 'Best seller Laptops' },
      ]
    },
    {
      id: 4, name: 'Other Accsesories', availabilities: [
        { name: 'Mouse and Keyboard' },
        { name: 'Display,graphics card and EHD' },
        { name: 'Phone covers' },
        { name: 'Audio accessories' },
        { name: 'Portable chargers ' },
      ]
    }
  ]

  list2 = [
    {
      id: 1, name: 'Mens', availabilities: [
        { name: 'Home wear' },
        { name: 'Office wear' },
        { name: 'Party wear' },
        { name: 'Casual wear' },
        { name: 'Ethenic wear' },
        { name: 'Watches' },
        { name: 'Shoes' },
        { name: 'Perfume and Deodrants' }
      ]
    },
    {
      id: 2, name: 'Womens', availabilities: [
        { name: 'Casual wear' },
        { name: 'Office wear' },
        { name: 'Party wear' },
        { name: 'Ethnic wear' },
        { name: 'Summer casuals' },
        { name: 'Club wear' },
        { name: 'Watches' }
      ]
    },
    {
      id: 3, name: 'Kids', availabilities: [
        { name: 'T-shirts & jackets' },
        { name: 'Trousers' },
        { name: 'Skirts' },
        { name: 'Shorts' },
        { name: 'Denim & Partywear' },
        { name: 'Nightwear' },
        { name: 'Swimwear' },
        { name: 'Pajamas & leggings' },
        { name: 'Rainwear' },
        { name: 'Footwear' },
      ]
    },
    {
      id: 4, name: 'Accsesories', availabilities: [
        { name: 'Belts,Bangles & Bracelets' },
        { name: 'Earrings & Necklaces' },
        { name: 'Eyeglasses & Sunglasses' },
        { name: 'Headdresses and headwraps' },
        { name: 'Rings' },
        { name: 'Scarves,Socks and Stockings' },
        { name: 'Sandals,Shoes & Boots' }
      ]
    }
  ]

  list3 = [
    {
      id: 1, name: 'Home Appliances', availabilities: [
        { name: 'TV & Accessories' },
        { name: 'Screen 32 inches and less' },
        { name: 'Screen 40 inches and above' },
        { name: 'New launches' },
        { name: 'Home Theatres' },
        { name: 'Best sellers' },
        { name: 'Android TV' },
        { name: 'Set top box' }
      ]
    },
    {
      id: 2, name: 'Refrigerators', availabilities: [
        { name: 'Side-by-Side Refrigerator' },
        { name: 'Bottom Freezer Refrigerator' },
        { name: 'French Door Refrigerator' },
        { name: 'Counter-Depth Refrigerator' },
        { name: 'Mini Fridge' },
        { name: 'Door-in-Door Refrigerator' },
        { name: 'Best Seller' }
      ]
    },
    {
      id: 3, name: 'Air Conditioners', availabilities: [
        { name: 'Central Air Conditioners' },
        { name: 'Ductless, Mini-Split Air Conditioners' },
        { name: 'Window Units' },
        { name: 'Portable Units' },
        { name: 'Hybrid Air Conditioner' },
        { name: 'Geothermal Heating and Cooling' },
        { name: 'Best Seller' }
      ]
    },
    {
      id: 4, name: 'Washing Machine', availabilities: [
        { name: 'Fully-automatic' },
        { name: 'Semi-automatic' },
        { name: 'Front-loading/washer and dryer combo' },
        { name: 'Front-loading/Stackable with separate washer and dryer' },
        { name: 'Compact washing machine aka portable washing machine' },
        { name: 'Best Sellers' },
      ]
    }
  ]

  open(subData) {

    // console.log(subData.name)
    const headers = {
      'content-Type':
        'application/json'
    }
    this.httpClient.post('http://localhost:8080/deals', { parameter: subData.name },
      { headers: headers }).subscribe((data) => {
        console.log(data);
      })
  }

  getLogData() {
    const headers = {
      'content-Type':
        'application/json'
    }
    this.httpClient.post('http://localhost:8080/redirectLog', { parameter: 'redirectLog' },
      { headers: headers }).subscribe((data) => {
        console.log(data);
        let produrl = data['dbResp'];
        for (let i of produrl) {
          if ((i['redirLog']['prodURI']).search('amazon') > 0) {
            console.log('Amazon');
          }
          else if((i['redirLog']['prodURI']).search('shopclues') > 0) {
            console.log('shopclues')
          }
          else if((i['redirLog']['prodURI']).search('flipkart') > 0) {
            console.log('flipkart')
          }
        }
      })
  }
}