import { Component } from '@angular/core';
import {Hero} from "common/interfaces/heros.interface";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero:Hero = {
    name: "HeroName",
    age: 27,
  }
}
