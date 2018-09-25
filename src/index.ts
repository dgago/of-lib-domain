import { Mapper, IMapper } from "./data/mapper";
import { ValueObject } from "./entities/value-object";
import { Entity, IEntity } from "./entities/entity";
import { AggregateRoot } from "./entities/aggregate-root";
import { Collection, Predicate } from "./entities/collection";
import { Repo } from "./data/repo";
import { IStore, IResults, IQuery } from "./data/store";
import { DomainEvent } from "./events/domain-event.vo";
import { DomainService } from "./services/domain-service";
import { SameEntityRepo } from "./data/same-entity.repo";
import { ArgumentError } from "./errors/argument.error";
import { AuthError } from "./errors/auth.error";
import { AppService } from "./services/app-service";
import { DbContext } from "./data/context";

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export {
  IMapper,
  Mapper,
  Repo,
  SameEntityRepo,
  IStore,
  IQuery,
  IResults,
  DbContext,
  AggregateRoot,
  Collection,
  Predicate,
  IEntity,
  Entity,
  ValueObject,
  ArgumentError,
  AuthError,
  DomainEvent,
  AppService,
  DomainService
};
