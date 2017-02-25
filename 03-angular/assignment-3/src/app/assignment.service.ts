import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Assignment } from './components/student.component';

@Injectable()
export class AssignmentService {
readonly endpoint: string = 'http://localhost:3000/assignments';
     private headers = new Headers({'Content-Type': 'application/json'});
  private assignmentUrl = 'api/assignment';  // URL to web api

  constructor(private http: Http) { }

    getHeroes(): Promise<Assignment[]> {
    return this.http.get(this.assignmentUrl)
               .toPromise()
               .then(response => response.json().data as Assignment[])
               .catch(this.handleError);
  }


  getHero(id: number): Promise<Assignment> {
    const url = `${this.assignmentUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Assignment)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.assignmentUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Assignment> {
    return this.http
      .post(this.assignmentUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


