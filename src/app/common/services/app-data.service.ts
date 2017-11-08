import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  private _tasks: any[] = [];
  private _tasksStream: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  get tasks(): any[] {
    return this._tasks;
  }

  get tasksStream(): Observable<Array<any>> {
    this.calcId();
    return this._tasksStream.asObservable();
  }

  constructor(private http: Http) {
    this.calcId();
    this.http.get('http://localhost:3003/data')
      .subscribe((res) => {
        this._tasksStream.next(res.json().tasks);
      });
  }

  public calcId() {
    for (let i = 0; i < this._tasksStream.getValue().length; i++) {
      this._tasksStream.getValue()[i].id = i + 1;
    }
  }

  public addNewTask(formData) {
    this._tasksStream.next(this._tasksStream.getValue().concat({...formData}));
    this.syncTasks();
  }

  public removeTask(index: number) {
    console.log(index);
    this._tasksStream.getValue().splice(index, 1);
    this._tasksStream.next(this._tasksStream.getValue());

    this.syncTasks();
  }

  private syncTasks() {
    this.calcId();

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:3003/data', {"tasks": this._tasksStream.getValue()}, options)
      .subscribe();
  }
}