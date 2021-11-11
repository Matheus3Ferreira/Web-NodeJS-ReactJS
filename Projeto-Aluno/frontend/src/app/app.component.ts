import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom, map, take } from 'rxjs';
import { Student } from './core/student.class';
import { StudentService } from './services/student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'students';

  students?: Student[];

  formStudent: FormGroup = this.fb.group({
    name: ['', []],
    birthday: ['', []]
  })

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  async ngOnInit() {
    this.students = await firstValueFrom(this.studentService.list())
  }

  async create() {
    this.students.push(await firstValueFrom(this.studentService.post(this.formStudent.value)))
  }

  deleteUser(id: string) {
    this.studentService.delete(id).subscribe(() => { this.students = this.students.filter((student) => student.id !== id) })
  }

  saveUser(item: Student) {
    item.saving = true;
    this.studentService.save(item.id, item).subscribe(
      {
        next: (data) => {
          item.editing = false;
          item.saving = false;
        }
      }
    );
  }

  handleEditUser(item: Student) {
    item.editing = !item.editing
  }

}
