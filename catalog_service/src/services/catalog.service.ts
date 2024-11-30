import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {

    
    constructor(
        private repository: ICatalogRepository
    ){}
    async createProduct(input: any){
        const data = await this.repository.create(input)
        if(!data.id){
            throw new Error('unable to create product')
        }
        return data
    }

    async updateProduct(input: any) {
        const data = await this.repository.update(input);
        if (!data.id) {
          throw new Error("unable to update product");
        }
        // emit event to update record in Elastic search
        return data;
      }

    //instead if this we will get product from elastic search
    async getProducts(limit: number, offset:number){
        const products = await this.repository.find(limit,offset)
        return products
    }

    async getProduct(id: number){
        const product = await this.repository.findOne(id)
        return product
    }

    async deleteProduct(id: number) {
        const response = await this.repository.delete(id)
        //delete record from elastic search

        return response
    }
}