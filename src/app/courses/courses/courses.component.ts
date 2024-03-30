import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';


import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  //courses: Course[] =[];
  displayedColumns= ['_id','name', 'category']
  courses: Observable<Course[]>;
  //coursesService: CoursesService;

  //dataSource = new MatTableDataSource(this.courses);
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
 constructor(private coursesService: CoursesService){
  
  this.courses= this.coursesService.list();
 }
 ngOnInit(): void{

 }
}
