import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  searchTerm: string = '';
  actionMovies: Array<any> = [
    { title: "Die Hard", director: "John McTiernan", year: 1988, rating: 8.2 },
    { title: "Mad Max: Fury Road", director: "George Miller", year: 2015, rating: 8.1 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9.0 },
    { title: "Terminator 2: Judgment Day", director: "James Cameron", year: 1991, rating: 8.5 },
    { title: "Gladiator", director: "Ridley Scott", year: 2000, rating: 8.5 },
    { title: "John Wick", director: "Chad Stahelski", year: 2014, rating: 7.4 },
    { title: "The Raid: Redemption", director: "Gareth Evans", year: 2011, rating: 7.6 },
    { title: "Mission: Impossible - Fallout", director: "Christopher McQuarrie", year: 2018, rating: 7.7 },
    { title: "The Bourne Identity", director: "Doug Liman", year: 2002, rating: 7.9 },
    { title: "Léon: The Professional", director: "Luc Besson", year: 1994, rating: 8.5 }
  ];

  get filteredMovies(): any[] {
    return this.actionMovies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
