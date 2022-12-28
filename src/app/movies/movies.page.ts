import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public folder: string = '';
  public movies: any;
  public edit: boolean = false;
  public title: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movies = this.moviesService.ListMovies();
  }
  public editMove(index: number, titleMove: string) {
    this.title = titleMove;
    this.edit = this.edit ? false : true;
  }

  public movie(id: number) {
    this.router.navigate(['/movie/' + id]);
  }
}
