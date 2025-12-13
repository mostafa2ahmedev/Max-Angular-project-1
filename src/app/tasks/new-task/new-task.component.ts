import {
  Component,
  EventEmitter,
  inject,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { NewTask } from './newTask.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Input({ required: true }) userId!: string;
  // @Output() add= new EventEmitter<NewTask>()
  private tasksService: TasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    // this.add.emit({title:this.enteredTitle,summary:this.enteredSummary,date:this.enteredDate});
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
