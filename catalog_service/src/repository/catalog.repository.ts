import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogRepository implements ICatalogRepository {
    create(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    update(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    delete(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    find(data: any): Promise<[]> {
        throw new Error("Method not implemented.");
    }
    findOne(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    
}