import { Injectable } from '@angular/core';
interface Movie {
  id: number;
  title: string;
  img: string;
  description: string;
  qualification: Array<any>;
}
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movies: Movie[] | string | null = '';

  constructor() {}

  //Peliculas cargadas por defecto
  public ListMoviesDefault() {
    return (this.movies = [
      {
        id: 0,
        title: 'Wendell & Wild',
        img: 'https://cdn.superaficionados.com/imagenes/11-wendell-wild-cke.jpg',
        description:
          'Dos hermanos demonios, Wendell y Wild, deben enfrentarse a sus archienemigos, la monja Helly y sus dos acólitos, adolescentes góticos llamados Kat y Raul. Pero cuando llega la hora de la verdad, Kat descubre que Raul no puede ver a los demonios, y tendrá que solicitar su ayuda si esta va a ser una pelea justa.',
        qualification: [
          {
            0: true,
          },
          {
            1: true,
          },
          {
            2: true,
          },
          {
            3: true,
          },
          {
            4: true,
          },
        ],
      },
      {
        id: 1,
        title: 'Hocus Pocus 2',
        img: 'https://cdn.superaficionados.com/imagenes/10-hocus-pocus-2-cke.jpg',
        description:
          'Tres chicas cometen el grave error de traer de vuelta a las hermanas Sanderson, nuevamente, al Salem moderno. Ahora tendrán que descubrir una manera de evitar que las brujas se coman a los niños. El mundo se libró una primera vez de Winifred, Mary y Sarah, ¿pero qué pasa cuando juegas con la magia? ¡Pues que la magia juega contigo!',
        qualification: [
          {
            0: true,
          },
          {
            1: true,
          },
          {
            2: false,
          },
          {
            3: false,
          },
          {
            4: false,
          },
        ],
      },
      {
        id: 2,
        title: 'The Munsters',
        img: 'https://cdn.superaficionados.com/imagenes/9-the-munsters-cke.jpg',
        description:
          'Esta película trae a la nueva generación la historia de los Munster, una familia de monstruos que se mudan de Transilvania a un suburbio americano.',
        qualification: [
          {
            0: true,
          },
          {
            1: false,
          },
          {
            2: false,
          },
          {
            3: false,
          },
          {
            4: false,
          },
        ],
      },
    ]);
  }
  public ListMovies() {
    return this.ListMoviesDefault();
  }

  public Movie(id: number) {
    return this.ListMoviesDefault().find((x) => x.id == id);
  }

  public Edit(id: number, edit: string) {
    const moviedit = this.ListMoviesDefault().find((x) => x.id == id);
    if (moviedit?.description != undefined) {
      moviedit.description = edit;
    }
    return moviedit;
  }

  public DeleteMovie(id: number) {}
}
