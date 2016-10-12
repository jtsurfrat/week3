namespace fullapi.Controllers {

    export class HomeController {
      public message = "Hello from the homepage";
      public actors;
      public newActor;

      public addActors(){
        this.ActorService.saveActor(this.newActor).then(() => {
          this.actors.push(this.newActor);
          this.newActor = null;
        })
      }

      constructor(private ActorService: fullapi.Services.ActorService){
        this.actors = ActorService.listActors();
      }



        // public message = 'Hello from the home page!';
        // public movies;
        //
        // constructor(movieService:fullapi.Services.MovieService) {
        //     this.movies = movieService.listMovies();
        // }


    }

    // build routes entire data
    // build 








    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
