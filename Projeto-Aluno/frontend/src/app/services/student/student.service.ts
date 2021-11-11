import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, pluck } from 'rxjs';
import { Student, StudentPostResponse } from 'src/app/core/student.class';
import { environment } from 'src/environments/environment';
import { StudentAdpterService } from './student-adpter.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
    private adpter: StudentAdpterService
  ) { }

  list(): Observable<Student[]> {

    return this.http
      .get(environment.url)
      .pipe(
        map((data: any[]) => data.map((item) => this.adpter.adapt(item)))
      )

  }

  get(): Observable<Student> {

    return this.http
      .get(environment.url)
      .pipe(
        map((data: any) => this.adpter.adapt(data))
      )

  }

  post(data: StudentPostResponse): Observable<Student> {

    return this.http
      .post(environment.url, this.adpter.post(data))
      .pipe(
        map((data: any) => this.adpter.adapt(data))
      )

  }

  delete(id: string): Observable<any> {

    return this.http
      .delete(environment.url + id)

  }

  save(id: string, data: Student) {

    return this.http
      .put(environment.url + id, this.adpter.put(data))
      .pipe(
        map((data: any) => this.adpter.adapt(data))
      )


  }

}
