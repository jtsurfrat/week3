namespace mongodb.Services {

  export class ProductService {
    private ProductResource;

    public list(){
      return this.ProductResource.query();
    }

    public save(product){
      return this.ProductResource.save(product).$promise;
    }

    public get(productId){
      return this.ProductResource.get({id:productId})
    }

    public remove(productId){
      return this.ProductResource.remove({id: productId}).$promise;
    }

    constructor($resource: ng.resource.IResourceService){
      this.ProductResource = $resource('/products/:id')
    }
  }

  angular.module('mongodb').service('productService', ProductService);









}
