
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class UpdateUserInput {
    id: number;
}

export abstract class IQuery {
    abstract helloWorld(): string | Promise<string>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
