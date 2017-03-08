import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Assignment } from './assignment';

//@Injectable()
//export class AssignmentService {
//readonly endpoint: string = 'http://localhost:3000/assignments';
//     private headers = new Headers({'Content-Type': 'application/json'});
 // private assignmentUrl = 'api/assignment';  // URL to web api

  //constructor(private http: Http) { }

  //  getAssignment(): Promise<Assignment[]> {
   // return this.http.get(this.assignmentUrl)
   //            .toPromise()
   //            .then(response => response.json().data as Assignment[])
   //            .catch(this.handleError);
 // }


 // delete(id: number): Promise<void> {
 //   const url = `${this.assignmentUrl}/${id}`;
  //  return this.http.delete(url, {headers: this.headers})
 //     .toPromise()
  //    .then(() => null)
  //    .catch(this.handleError);
 // }

 // create(name: string): Promise<Assignment> {
 //   return this.http
  //    .post(this.assignmentUrl, JSON.stringify({name: name}), {headers: this.headers})
  //    .toPromise()
 //     .then(res => res.json().data)
 //     .catch(this.handleError);
 // }

 //private handleError(error: any): Promise<any> {
  //  console.error('An error occurred', error); // for demo purposes only
 //   return Promise.reject(error.message || error);
 // }
//}


@Injectable()
export class AssignmentService {
    readonly url : string = "http://localhost:3000/assignments"

    constructor(private http: Http){ }

    add(assignment: Assignment): Promise<any> {
        let headers = new Headers ({ 'Conten-Type': 'application/json'});
        let optons = new RequestOptions({ headers: headers})

        return this.http.post(this.url, assignment).toPromise();
      
    }

    delete(assignment: Assignment){
        let deleteUrl = `${this.url}/${assignment.id}`

        return this.http.delete(deleteUrl).toPromise();
    }

    getAll(): Promise<Assignment[]> {
        return this.http.get(this.url).toPromise().then(
            response => {
                let responseObj = response.json();
                let responseArray: Assignment[];

                responseArray = responseObj.map((assignment: Assignment) => {
                  return new Assignment(assignment.name, assignment.points, assignment.points_possible, assignment.id)
                });

                return responseArray;
            }
            )
    }
}
