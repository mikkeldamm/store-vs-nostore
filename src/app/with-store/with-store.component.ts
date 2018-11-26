import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WithStore } from './store/with-store.store';
import { Item } from './store/with-store.state';
import { UpdateItemAmount, UpdateItemNoVat } from './store/with-store.actions';

@Component({
    selector: 'app-with-store',
    templateUrl: './with-store.component.html',
    styleUrls: ['./with-store.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithStoreComponent {

    public items: Observable<Item[]> = this._store.pipe(map(state => state.items));
    public totalAmount: Observable<number> = this._store.pipe(map(state => state.totalAmount));
    public totalVat: Observable<number> = this._store.pipe(map(state => state.totalVat));

    constructor(
        private _store: WithStore,
    ) {}

    public onAmountChange(amount: string, itemId: number) {
        this._store.dispatch(new UpdateItemAmount({ amount: +amount, itemId }));
    }

    public onNoVatChange(noVat: boolean, itemId: number) {
        this._store.dispatch(new UpdateItemNoVat({ noVat, itemId }));
    }
}
