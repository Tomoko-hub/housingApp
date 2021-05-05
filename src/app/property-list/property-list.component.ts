import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Brila House",
      "Type": "House",
      "Price": 120000,
    },
    {
      "Id": 2,
      "Name": "City apartment",
      "Type": "House",
      "Price": 280000,
    },
    {
      "Id": 3,
      "Name": "Cosy home",
      "Type": "House",
      "Price": 250000,
    },{
      "Id": 4,
      "Name": "Beach house",
      "Type": "House",
      "Price": 320000,
    },
    {
      "Id": 5,
      "Name": "Dream house",
      "Type": "House",
      "Price": 500000,
    },
    {
      "Id": 6,
      "Name": "Candie House",
      "Type": "House",
      "Price": 180000,
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
