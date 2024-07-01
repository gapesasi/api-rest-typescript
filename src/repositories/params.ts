export default interface IRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
  create(params: T): Promise<T>;
  update(params: T): Promise<number>;
  delete(id: number): Promise<number>;
}
