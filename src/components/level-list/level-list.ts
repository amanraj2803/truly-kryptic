import * as LevelListTpl from './level-list.html';
import * as LevelListSyl from './level-list.scss';
import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase/app";
import { AngularFireAuth } from 'angularfire2/auth';
import * as levels from '../../../Notes/levels.json';

@Component({
    selector: 'level-list',
    template: LevelListTpl,
    styles: [LevelListSyl]
})

// Implements: #SPC-level-list
export class LevelListComponent {

    levels: Array<Array<Level>>;

    constructor() {
        this.levels = levels;
    }

    getLevelNumber(levelIndex: number, sublevelIndex: number, totalSublevels: number) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        return (levelIndex + 1) + (totalSublevels > 1 ? alphabet[sublevelIndex] : '');
    }
}