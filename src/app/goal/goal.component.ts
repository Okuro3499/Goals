import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[];

  alertService: AlertService;

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const && semicolon
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        // tslint:disable-next-line: semicolon
        this.goals.splice(index, 1)
        // tslint:disable-next-line: quotemark && semicolon
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  addNewGoal(goal) {
    // tslint:disable-next-line: prefer-const
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    // tslint:disable-next-line: semicolon
    goal.completeDate = new Date(goal.completeDate)
    // tslint:disable-next-line: semicolon
    this.goals.push(goal)
  }

  constructor(goalService: GoalService) {
    // tslint:disable-next-line: semicolon
    this.goals = goalService.getGoals()
    this.alertService = this.alertService;
  }

  ngOnInit() {
  }

}
