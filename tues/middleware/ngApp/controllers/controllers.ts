namespace middleware.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService:middleware.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
