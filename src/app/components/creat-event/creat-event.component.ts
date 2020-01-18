import {  NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: 'app-creat-event',  
  templateUrl: './creat-event.component.html',  
  styleUrls: ['./creat-event.component.scss'],
  providers: []
})

export class CreatEventComponent implements OnInit {
  static uploadedFile: any = null;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit() {}

  async onSubmit(form: NgForm) {
    if(CreatEventComponent.uploadedFile){
      await this.fetchData.creatEvent({...form.value, _id: CreatEventComponent.uploadedFile.filename.substring(0,CreatEventComponent.uploadedFile.filename.indexOf('.')), imgUrl: 'http://localhost:5000/' + CreatEventComponent.uploadedFile.path});
    } else {
      await this.fetchData.creatEvent(form.value);      
    }
    form.reset();
  }
}
