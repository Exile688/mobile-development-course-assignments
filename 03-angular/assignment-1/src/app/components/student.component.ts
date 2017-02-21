import { Component } from '@angular/core';

@Component({
    moduleId: module.id, 
    selector: 'student',
    templateUrl: 'student.component.html',
})
export class StudentComponent { 
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


    constructor(){
        this.studentName = "Bob Dobbs";
        this.studentEmail = "BobDobbs@gmail.com"
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.assignmentList = [];
    }
    addAssignment(): void{
        let assignment: Assignment;

        assignment = {
            name: this.iName,
            pointsScored: this.iScoredPoints,
            pointsPossible: this.iPossiblePoints,
            percent: this.iScoredPoints / this.iPossiblePoints,
        }

        this.assignmentList.push(assignment);
        this.updatePerformance();
    }
    updatePerformance(){
        this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
        this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
        this.percent = this.pointsScored / this.pointsPossible;
        this.grade = this.getGrade();

    }

    private getGrade(): string {
        if (this.percent > 0.9)
            return 'A';
        else if (this.percent >= .8)
            return 'B';
        else if (this.percent >= .7)
            return 'C';
        else if (this.percent >= .6)
            return 'D';
        else 
            return 'F';
    }
    private addPointsPossible(tally: number, assignment: Assignment) {
        return tally + assignment.pointsPossible;

    }
        private addPointsScored(tally: number, assignment: Assignment) {
        return tally + assignment.pointsScored;
}
}
interface Assignment {
    name: string;
    pointsScored: number;
    pointsPossible: number; 
    percent: number;

}