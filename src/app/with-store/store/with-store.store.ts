import { Store } from '@ngrx/store';

import { State } from './with-store.state';

export class WithStore extends Store<State> {}

export const withStoreProvider = {
    provide: WithStore,
    useFactory: (store: Store<{ withStore: State; }>) => {
        return store.select(s => s.withStore);
    },
    deps: [ Store ]
};
