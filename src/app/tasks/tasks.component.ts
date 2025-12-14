import { Component, Injectable, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from './dummy-tasks'
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTask } from './new-task/newTask.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

@Input({required :true})  name! : string;
@Input({required :true}) userId!:string;
isAdddingTask=false;

constructor(private tasksService:TasksService){
}

get selectedUserTasks(){
return  this.tasksService.getUesrTasks(this.userId);
}



onStartAddTask(){
  this.isAdddingTask=true;
}

onCloseAddTask(){
    this.isAdddingTask=false;

}



// get selectedUserTasks(){
// return this.tasks.filter((t)=>t.userId === this.userId);
// }
// addTask(newTask: NewTask){
// this.tasks.push({
//   id:new Date().getTime().toString(),
//   userId:this.userId,
//   title:newTask.title,
//   summary:newTask.summary,
//   dueDate:newTask.date

// });
//     this.isAdddingTask=false;
// }

// completeTask(id:string){
//  this.tasks= this.tasks.filter((t)=>t.id !==id);
// }

}
