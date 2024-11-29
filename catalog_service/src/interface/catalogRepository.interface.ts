export interface ICatalogRepository {
    create(data: any): Promise<{}>
    update(data: any): Promise<{}>
    delete(data: any): Promise<{}>
    find(data: any): Promise<[]>
    findOne(data: any): Promise<{}>
}