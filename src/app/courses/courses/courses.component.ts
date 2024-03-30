import { Component } from '@angular/core';
import { Course } from '../model/course';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] =[{_id:'1', name: 'Angular', category:'Front'}];
  displayedColumns= ['name', 'category']
 constructor(){}
}
