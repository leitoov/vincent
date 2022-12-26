import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public position: any = '';
  public movie!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.position = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const movies = this.moviesService.ListMovies();
    this.movie = movies[this.position];
  }
}
