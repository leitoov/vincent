import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../api/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public position: any = '';
  public movie!: any;
  public edit: boolean = false;
  public editmovie!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    public moviesService: MoviesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    //recibe el id de la pelicula
    this.position = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.movie = this.moviesService.Movie(this.position);

    this.editmovie = this.fb.group({
      TextMovie: ['', Validators.compose([Validators.required])],
    });
  }
  back() {
    this.router.navigate(['/movies']);
  }
  Edit() {
    this.edit = true;
  }
  Editar() {
    this.edit = false;
    this.movie = this.moviesService.Edit(
      this.position,
      this.editmovie.value.TextMovie
    );
  }
}
