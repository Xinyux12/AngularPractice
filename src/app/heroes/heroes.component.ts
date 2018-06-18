import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes:any;

  private RESTUrl: string = "/assets/hero_data.json";

  selectedHero: Hero;

  hero: Hero;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var res = this.http.get(this.RESTUrl).subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  add(new_name: string): void {
    //Sample Code
    new_name = new_name.trim();
    if (!new_name) { return; }

    this.hero = new Hero;			 //Instantiate Hero class
    this.hero.id = Math.floor(Math.random()*1000);			// Write Code to generate unique ID;
    this.hero.name = new_name;
    this.heroes.push(this.hero);
    this.selectedHero = null;
  }
  delete(hero: Hero): void {
    // Sample Code
    this.heroes = this.heroes.filter(h => h !== hero);
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    }
  }


}