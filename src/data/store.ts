import { Entity } from "../entities/entity";

export interface IStore<T extends Entity<K>, K> {
  // async methods
  findOne(id: K): Promise<T>;

  findAll(q: IQuery): Promise<IResults<T>>;

  find(
    q: IQuery,
    pageIndex: number,
    pageSize: number,
    sort: IQuery
  ): Promise<IResults<T>>;

  exists(q: IQuery): Promise<boolean>;

  create(item: T): Promise<K>;

  replace(id: K, item: T): Promise<boolean>;

  delete(id: K): Promise<boolean>;

  // sync methods
  findOneSync(id: K): T;

  findAllSync(q: IQuery): IResults<T>;

  findSync(
    q: IQuery,
    pageIndex: number,
    pageSize: number,
    sort: IQuery
  ): IResults<T>;

  existsSync(q: IQuery): boolean;

  createSync(item: T): K;

  replaceSync(id: K, item: T): void;

  deleteSync(id: K): void;
}

export interface IQuery {
  [key: string]: any;
}

export interface IResults<T> {
  count: number;
  pageIndex: number;
  pageSize: number;
  items: T[];
}
