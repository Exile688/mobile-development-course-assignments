import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import { Assignment } from '../shared/assignment'


@Component({
  moduleId: module.id,
  selector: 'student',
  templateUrl: 'hero.component.html',
  providers: [ HeroService ]
})
export class HeroComponent implements OnInit { 
    assignment: Quest[];
    studentName: string;
    studentEmail: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    grade: string;
    iName: string;
    iScoredPoints: number;
    iPossiblePoints: number;
    assignmentList: Assignment[];

    constructor(private assignmentService: AssignmentService) {
        this.heroName = "Bob Smith";
        this.realm = "bobsmith@gmail.com"
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.assignmentList = [];
    }

    ngOnInit() {
        this.refresh();
        
    }

    refresh(){
         this.questService.getAll().then(
        quests => { 
         this.questList = quests;
         this.updatePerformance();
        }
         );
    }

    addQuest(): void {
        let quest: Quest;
        //let assignmentPercent = this.iScoredPoints / this.iPossiblePoints;

        quest =new Quest(this.iName, this.iScoredPoints, this.iPossiblePoints);
        
        this.questService.add(quest).then(
        () => {this.refresh(); }
        )
    }

    deleteQuest(quest: Quest): void {
        this.questService.delete(quest).then(
            () => { this.refresh(); }
        )
    }

    updatePerformance() {
        if (this.questList.length === 0) {
            this.pointsPossible = 0;
            this.pointsScored = 0;
            this.percent = 0;
            this.grade = 'N/A';
        }
        else {
            this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
            this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
            this.percent = this.pointsScored / this.pointsPossible;
            this.grade = this.getGrade(this.percent);
        }
    }

    private getGrade(percent: number): string {
        if (percent >= 0.9)
            return 'A';
        else if (percent >= .8 )
            return 'B';
        else if (percent >= .7 )
            return 'C';
        else if (percent >= .6 )
            return 'D';
        else 
            return 'F';
    }

    private addPointsPossible(tally: number, quest: Quest) {
        return tally + quest.points_possible;
    }

    private addPointsScored(tally: number, quest: Quest) {
        return tally + quest.points;
    }
}

