namespace animalapp.Services {
  export class AnimalService {
    private AnimalResource;

    public list(){
      return this.AnimalResource.query();
    }

    public get(animalId){
      return this.AnimalResource.get({id:animalId});
    }

    public save(animal){
      return this.AnimalResource.save({id:animal._id}, animal).$promise;
    }
    public remove(animalId){
      return this.AnimalResource.remove({id:animalId}).$promise;
    }
    constructor($resource: ng.resource.IResourceService){
      this.AnimalResource = $resource('animals/:id');
    }

  }
  angular.module('animalapp').service('animalService', AnimalService);
}



//// cat
