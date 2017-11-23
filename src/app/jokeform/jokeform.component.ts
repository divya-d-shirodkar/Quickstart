import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Joke } from "../model/joke.model";

@Component({
  selector: 'jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeformComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
 

  createJoke(setup:string, punchline:string) {
        console.log(setup);
        console.log(punchline);
        this.jokeCreated.emit(new Joke(setup, punchline));
  }
 

  ngOnInit() {
  }

}
