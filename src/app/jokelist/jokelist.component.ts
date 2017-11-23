import { Component, OnInit } from '@angular/core';
import { Joke } from "../model/joke.model";

@Component({
  selector: 'jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  jokes: Array<Joke>;

  constructor() { 
    this.jokes = [
      new Joke("Text 1", "puncline 1"),
      new Joke("Text 2", "puncline 3"),
      new Joke("Text 3", "puncline 3")      
    ]
  }

  addJoke(joke) {
    console.log(joke);
    this.jokes.push(joke)
  }
  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

  ngOnInit() {
  }

}
