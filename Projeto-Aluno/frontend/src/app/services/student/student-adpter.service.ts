import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/adapter';
import { Student, StudentPostResponse, StudentPutResponse } from 'src/app/core/student.class';

@Injectable({
  providedIn: 'root'
})
export class StudentAdpterService implements Adapter<Student, StudentPostResponse, StudentPutResponse> {

  constructor() { }

  post(item: any): StudentPostResponse {
    return new StudentPostResponse(item.name, new Date(item.birthday).toISOString(), item.active)
  }

  put(item: any): StudentPutResponse {
    return new StudentPutResponse(item.id, item.name, item.birthday, item.active)
  }

  adapt(item: any): Student {
    return new Student(item.id, item.name, new Date(item.birthday), item.active, false, false)
  }



}
