namespace mongodb.Controllers {

    export class HomeController {
      public products;
      public newProduct;

      public save(){
        this.productService.save(this.newProduct).then(() => {
          this.products = this.productService.list();
          this.newProduct = null;
        })
      }

      public remove(id){
        this.productService.remove(id).then(() => {
          this.products = this.productService.list();
        })
      }
        //public message = 'Hello from the home page!';
      constructor(public productService: mongodb.Services.ProductService){
        this.products = productService.list();
      }
    }
    export class EditController{
      public product;

      public save(){
        this.productService.save(this.product).then(() => {
          this.$state.go('home');
        })
      }
      constructor(private productService:mongodb.Services.ProductService,
        private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService){
          let productId = $stateParams['id'];
          this.product = productService.get(productId);
      }
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
