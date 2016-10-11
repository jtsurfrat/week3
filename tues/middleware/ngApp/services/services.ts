namespace middleware.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('middleware').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('middleware').service('myService', MyService);
    }
