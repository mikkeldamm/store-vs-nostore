import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, concatMap, filter, map, withLatestFrom } from 'rxjs/operators';

import { VatService } from 'src/app/vat.service';

import {
    WithStoreActionTypes,
    GetItemVat,
    UpdateItemVat,
    UpdateItemAmount,
    CalculateTotalAmount,
    CalculateTotalVat,
    UpdateItemNoVat,
} from '../store/with-store.actions';
import { WithStore } from './with-store.store';

@Injectable()
export class WithStoreEffects {

    @Effect()
    resetItemVatToZeroOnNoVat$ = this._actions$.pipe(
        ofType<UpdateItemNoVat>(WithStoreActionTypes.UpdateItemNoVat),
        filter(action => action.payload.noVat),
        map(action => new UpdateItemVat({ vat: 0, itemId: action.payload.itemId })),
    );

    @Effect()
    getItemVatOnIncludeVat$ = this._actions$.pipe(
        ofType<UpdateItemNoVat>(WithStoreActionTypes.UpdateItemNoVat),
        filter(action => !action.payload.noVat),
        withLatestFrom(this._store),
        map(([ action, state ]) => state.items.find(item => item.id === action.payload.itemId)),
        map(item => new GetItemVat({ amount: item.amount, itemId: item.id })),
    );

    @Effect()
    getItemVatOnUpdateItemAmount$ = this._actions$.pipe(
        ofType<UpdateItemAmount>(WithStoreActionTypes.UpdateItemAmount),
        withLatestFrom(this._store),
        map(([ action, state ]) => state.items.find(item => item.id === action.payload.itemId)),
        filter(item => !item.noVat),
        map(item => new GetItemVat({ amount: item.amount, itemId: item.id })),
    );

    @Effect()
    getItemVat$ = this._actions$.pipe(
        ofType<GetItemVat>(WithStoreActionTypes.GetItemVat),
        mergeMap(action => this._vatService
            .getVatAmount(action.payload.amount)
            .pipe(
                map(vat => new UpdateItemVat({ vat, itemId: action.payload.itemId }))
            ),
        ),
    );

    @Effect()
    calculateTotalAmountOnUpdateItemAmount$ = this._actions$.pipe(
        ofType<UpdateItemAmount>(WithStoreActionTypes.UpdateItemAmount),
        map(() => new CalculateTotalAmount()),
    );

    @Effect()
    calculateTotalVatOnUpdateItemVat$ = this._actions$.pipe(
        ofType<UpdateItemVat>(WithStoreActionTypes.UpdateItemVat),
        map(() => new CalculateTotalVat()),
    );

    constructor(
        private _actions$: Actions,
        private _vatService: VatService,
        private _store: WithStore,
    ) { }
}
