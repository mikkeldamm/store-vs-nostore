import { WithStoreActions, WithStoreActionTypes } from './with-store.actions';
import { State, initialState } from './with-store.state';

export const withStoreReducer = (state: State = initialState, action: WithStoreActions) => {
    switch (action.type) {
        case WithStoreActionTypes.UpdateItemAmount: {
            return {
                ...state,
                items: state.items.map(i => {
                    if (i.id === action.payload.itemId) {
                        return { ...i, amount: action.payload.amount };
                    }

                    return i;
                })
            };
        }

        case WithStoreActionTypes.UpdateItemNoVat: {
            return {
                ...state,
                items: state.items.map(i => {
                    if (i.id === action.payload.itemId) {
                        return { ...i, noVat: action.payload.noVat };
                    }

                    return i;
                })
            };
        }

        case WithStoreActionTypes.UpdateItemVat: {
            return {
                ...state,
                items: state.items.map(i => {
                    if (i.id === action.payload.itemId) {
                        return { ...i, vat: action.payload.vat };
                    }

                    return i;
                }),
            };
        }

        case WithStoreActionTypes.CalculateTotalAmount: {
            return {
                ...state,
                totalAmount: state.items.reduce((acc, curr) => acc + curr.amount, 0),
            };
        }

        case WithStoreActionTypes.CalculateTotalVat: {
            return {
                ...state,
                totalVat: state.items.reduce((acc, curr) => acc + curr.vat, 0),
            };
        }

        default: {
            return state;
        }
    }
};
