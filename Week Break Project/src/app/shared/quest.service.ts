import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quest } from './quest';

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
export class QuestService {
    readonly url : string = "http://localhost:3000/quests"

    constructor(private http: Http){ }

    add(quest: Quest): Promise<any> {
        let headers = new Headers ({ 'Conten-Type': 'application/json'});
        let optons = new RequestOptions({ headers: headers})

        return this.http.post(this.url, quest).toPromise();
      
    }

    delete(quest: Quest){
        let deleteUrl = `${this.url}/${quest.id}`

        return this.http.delete(deleteUrl).toPromise();
    }

    getAll(): Promise<Quest[]> {
        return this.http.get(this.url).toPromise().then(
            response => {
                let responseObj = response.json();
                let responseArray: Quest[];

                responseArray = responseObj.map((quest: Quest) => {
                  return new Quest(quest.name, quest.points, quest.points_possible, quest.id)
                });

                return responseArray;
            }
            )
    }
}
