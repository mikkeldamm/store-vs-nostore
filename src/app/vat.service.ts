import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class VatService {

    public getVatAmount(amount: number) {
        return from([amount]).pipe(
            map(_amount => _amount * 0.2),
            delay(200),
        );
    }
}
