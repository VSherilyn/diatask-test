import { Component } from '@angular/core';
import { AppDataService } from '../../common/services/app-data.service'
import { PaginatePipe, PaginationService } from 'ngx-pagination';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data',
  styleUrls: ['./app-data.component.scss'],
  templateUrl: './app-data.component.html',
  providers: [PaginationService]
})
export class AppDataComponent {
  p: number = 1;
  public taskData: any = {};
  public visibleModal: boolean = false;
  public indexToRemove: number;

  constructor(public appDataService: AppDataService) {
  }

  public addNewTask(form: NgForm) {
    let creationDate = new Date().toJSON().slice(0, 10);

    this.taskData = {
      state: 0,
      create_date: creationDate,
      ...form.value
    };
    this.appDataService.addNewTask(this.taskData);
  }

  public toggleModal(index: number) {
    this.indexToRemove = index;
    console.log(this.indexToRemove);
    this.visibleModal = !this.visibleModal;
  }

  public removeTask(event: Event) {
    event.preventDefault();

    this.visibleModal = false;
    this.appDataService.removeTask(this.indexToRemove);
  }
}