namespace fullapi.Services {

    export class ActorService {
      private ActorResource;

      public listActors() {
        return this.ActorResource.query();
      }

      public saveActor(newActor){
        return this.ActorResource.save(newActor).$promise;
      }

      constructor($resource: ng.resource.IResourceService){
        this.ActorResource = $resource('/actors');
      }

    }
    angular.module('fullapi').service("ActorService", ActorService);

    // export class MovieService {
    //     private MovieResource;
    //
    //     public listMovies() {
    //         return this.MovieResource.query();
    //     }
    //
    //     constructor($resource: ng.resource.IResourceService) {
    //         this.MovieResource = $resource('/api/movies');
    //     }
    // }
    // angular.module('fullapi').service('movieService', MovieService);
    // export class MyService {

    // }
    // angular.module('fullapi').service('myService', MyService);


    }
