import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from "../model/joke.model";

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') joke: Joke; 
  @Output() jokeDeleted = new EventEmitter<Joke>();
  
  ngOnInit() {
  }

  deleteJoke(joke:Joke) {
    this.jokeDeleted.emit(joke);
  }

}
