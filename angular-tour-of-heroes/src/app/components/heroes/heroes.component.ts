import {Component, OnInit} from '@angular/core';
import {Hero} from "common/interfaces/heros.interface";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  heros: any;
  async ngOnInit() {
    await this.http.get('http://localhost:5000/heros').subscribe((data) => {
      console.log(data);
      this.heros = data
    });
  }
  hero:Hero = {
    name: "HeroName",
    age: 27,
  }
}
