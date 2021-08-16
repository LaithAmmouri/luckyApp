import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import {UserServicesService} from '../../Services/user-services.service' 
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
public   ResultDestnation  :any;
public   CityName  :any;
public   CountryName  :any;
public ImgUrl : any;
public Description :any;
public Activitas : any;
  constructor(private router : Router , private route : ActivatedRoute , private UserService : UserServicesService) { }
public paramId :any;
public SearcValue : any;
  ngOnInit(): void {
    debugger
     //To get  Id from Page Search 
   this.paramId  = this.route.snapshot.paramMap.get('id');
    //Passing Id on Get Details
   this.GetDetailsDestnation(  this.paramId );
  }

      //To get  destinations is Searching 
    GetDetailsDestnation(id:any)
    {
      this.UserService.GetDestinationDetailsService(id).subscribe((ResultDtails:any)  =>{
         this.ResultDestnation = ResultDtails.destination;
         this.CityName = ResultDtails.destination.city;
         this.CountryName = ResultDtails.destination.country_name;
         this.ImgUrl  =  ResultDtails.destination.thumbnail.image_url;
         this.Description = ResultDtails.destination.description.text;
         this.Activitas = ResultDtails.activities;
        debugger;
       
     });  
    }
  //back to Search Page
    GetLuckyStatred()
    {
      this.router.navigate(['/searchpage']); 
    }

}
