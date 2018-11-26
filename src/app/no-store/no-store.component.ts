import { Component } from '@angular/core';
import { VatService } from '../vat.service';

@Component({
    selector: 'app-no-store',
    templateUrl: './no-store.component.html',
    styleUrls: ['./no-store.component.scss']
})
export class NoStoreComponent {
    public items = [
        { id: 1, amount: 0, vat: 0, noVat: false },
        { id: 2, amount: 0, vat: 0, noVat: false },
        { id: 3, amount: 0, vat: 0, noVat: false },
    ];

    public totalAmount = 0;
    public totalVat = 0;

    constructor(
        private _vatService: VatService,
    ) { }

    public onAmountChange(amount: string, id: number) {
        const item = this.items.find(i => i.id === id);
        item.amount = +amount;

        this.calculcateVatAmount(item);
    }

    public onNoVatChange(noVat: boolean, id: number) {
        const item = this.items.find(i => i.id === id);
        item.noVat = noVat;

        this.calculcateVatAmount(item);
    }

    public add() {
        this.items.push({ id: this.items.length, amount: 0, vat: 0, noVat: false });
        this.calculateTotals();
    }

    private calculateTotals() {
        this.totalAmount = this.items.reduce((acc, curr) => acc + curr.amount, 0);
        this.totalVat = this.items.reduce((acc, curr) => acc + curr.vat, 0);
    }

    private calculcateVatAmount(item) {
        if (item.noVat) {
            item.vat = 0;
            this.calculateTotals();
        } else {
            this._vatService
                .getVatAmount(item.amount)
                .subscribe(vat => {
                    item.vat = vat;
                    this.calculateTotals();
                });
        }
    }
}
