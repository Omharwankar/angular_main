import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      alert('task has been added')
    }
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      alert('task has been completed')
    }
  }
}
