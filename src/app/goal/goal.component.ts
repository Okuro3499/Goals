import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goToUrl(id) {
    // tslint:disable-next-line: semicolon
    this.router.navigate(['/goals', id])
  }

  deleteGoal(index) {
    // tslint:disable-next-line: prefer-const && semicolon
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

    if (toDelete) {
      // tslint:disable-next-line: semicolon
      this.goals.splice(index, 1)
      // tslint:disable-next-line: quotemark && semicolon
      this.alertService.alertMe("Goal has been deleted")
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

  constructor(goalService: GoalService, alertService: AlertService, private quoteService: QuoteRequestService, private router: Router) {
    // tslint:disable-next-line: semicolon
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit() {
    // tslint:disable-next-line: semicolon
    this.quoteService.quoteRequest()
    // tslint:disable-next-line: semicolon
    this.quote = this.quoteService.quote
  }
}
