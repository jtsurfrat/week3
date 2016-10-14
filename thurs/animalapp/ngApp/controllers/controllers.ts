namespace animalapp.Controllers {

    export class HomeController {
        //public message = 'Hello from the home page!';
        public animals;
        public animal = {};
        public validationErrors;

        public save() {
          this.animalService.save(this.animal).then(()=> {
            this.animals = this.animalService.list(); // redisplay list
            this.animal = {};  // clear form
            this.validationErrors = null;
          }).catch((err) => {
            console.error(err);
            this.validationErrors = err.data.errors;
          })
        }

        public remove(animalId) {
          this.animalService.remove(animalId).then(() => {
            this.animals = this.animalService.list(); // redisplay list
          }).catch((err) => {
            console.error(err);
          });
        }

        constructor(private animalService:animalapp.Services.AnimalService){
          this.animals = this.animalService.list();
        }
    }

    export class EditController {
    public animal;

    public save() {
      this.animalService.save(this.animal).then(()=> {
        this.$state.go('home'); // navigate back to home
      }).catch((err) => {
        console.error(err);
      })
    }

    constructor(
      private animalService:animalapp.Services.AnimalService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      let animalId = $stateParams['id'];
      this.animal = this.animalService.get(animalId);
    }
}


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
