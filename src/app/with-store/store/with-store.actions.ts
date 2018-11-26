import { Action } from '@ngrx/store';

export enum WithStoreActionTypes {
    UpdateItemAmount = '[WithStore] Update Item Amount',
    UpdateItemNoVat = '[WithStore] Update Item No Vat',
    UpdateItemVat = '[WithStore] Update Item Vat',
    GetItemVat = '[WithStore] Get Item Vat',
    GetItemVatSuccess = '[WithStore] Get Vat Amount Success',
    CalculateTotalAmount = '[WithStore] Calculate Total Amount',
    CalculateTotalVat = '[WithStore] CalculateTotalVat',
}

export class UpdateItemAmount implements Action {
    readonly type = WithStoreActionTypes.UpdateItemAmount;
    constructor(public payload: { amount: number; itemId: number; }) { }
}

export class UpdateItemNoVat implements Action {
    readonly type = WithStoreActionTypes.UpdateItemNoVat;
    constructor(public payload: { noVat: boolean; itemId: number; }) {}
}

export class UpdateItemVat implements Action {
    readonly type = WithStoreActionTypes.UpdateItemVat;
    constructor(public payload: { vat: number; itemId: number; }) { }
}

export class GetItemVat implements Action {
    readonly type = WithStoreActionTypes.GetItemVat;
    constructor(public payload: { itemId: number; amount: number; }) { }
}

export class CalculateTotalAmount implements Action {
    readonly type = WithStoreActionTypes.CalculateTotalAmount;
}

export class CalculateTotalVat implements Action {
    readonly type = WithStoreActionTypes.CalculateTotalVat;
}

export type WithStoreActions =
    | UpdateItemAmount
    | UpdateItemNoVat
    | UpdateItemVat
    | GetItemVat
    | CalculateTotalAmount
    | CalculateTotalVat;
