import { Component, OnInit } from '@angular/core';
import { AssociationAmenitiesService } from '../../services/association-amenities.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AssociationAmenitiesService) { }

  ngOnInit() {
    this.service.getData().subscribe (data => {
      console.log(data);
    })
  }

}
