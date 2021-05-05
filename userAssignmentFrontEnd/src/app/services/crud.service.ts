import { Injectable } from '@angular/core';
import { Users } from './Users';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class CrudService {
    url = 'http://localhost:8080/v1/users';
    geturl = 'http://localhost:8080/v1/users/list1';
    loginurl = "http://localhost:8080/v1/users/login";

    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(
        private httpUser: HttpClient,
    ) { }


    loginData(data: Users): Observable<any> {
        let LOGIN_API_URL = `${this.loginurl}`;
        return this.httpUser.post(LOGIN_API_URL, data)
            .pipe(
                catchError(this.handleErrorLogin)
            )
    }

    //create new 
    signupdataPost(data: Users): Observable<any> {
        console.log("adduser");
        let API_URL = `${this.url}`;
        // console.log(data);
        return this.httpUser.post(API_URL, data)
            .pipe(
                catchError(this.handleError)
            )
    }
    //get data
    getData(): Observable<any> {
        let GET_API_URL = `${this.geturl}`;
        console.log("get data from table");
        return this.httpUser.get(GET_API_URL);
    }

    getCurrentData(id:any): Observable<any> {
        return this.httpUser.get(`${this.url}/${id}`)

    }

    updateUser(id: any, data: any): Observable<any> {
        return this.httpUser.put(`${this.url}/${id}`,data);
    }


    //delete user 
    deleteUser(_id: string): Observable<void> {
        console.log("in service delete user" + _id);

        return this.httpUser.delete<void>(`${this.url}/${_id}`)
            .pipe(catchError(this.handleError));

    }
    // Error 
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'signup data not addedd';
        if (error.error instanceof ErrorEvent) {
            // Handle client error
            errorMessage = error.error.message;
        } else {
            // Handle server error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // console.log(errorMessage);
        return throwError(errorMessage);
    }

    //login error 
    handleErrorLogin(error: HttpErrorResponse) {
        let errorMessage = 'login post data is invalid ';
        if (error.error instanceof ErrorEvent) {
            // Handle client error
            errorMessage = error.error.message;
        } else {
            // Handle server error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // console.log(errorMessage);
        return throwError(errorMessage);
    }



    //delete data by id
    // deletetabledata(data:Users):Observable<any>{
    //     console.log("delete user data");
    //     let DELETE_API_URL=`${this.url}/:id`;
    //     console.log(data);
    //     return this.httpUser.delete(DELETE_API_URL);

    // }


}

