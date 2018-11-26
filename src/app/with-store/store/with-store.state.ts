export interface Item {
    id: number;
    amount: number;
    vat: number;
    noVat: boolean;
}

export interface State {
    items: Item[];
    totalAmount: number;
    totalVat: number;
}

export const initialState: State = {
    items: [
        {
            id: 1,
            amount: 0,
            vat: 0,
            noVat: false
        },
        {
            id: 2,
            amount: 0,
            vat: 0,
            noVat: false
        },
        {
            id: 3,
            amount: 0,
            vat: 0,
            noVat: false
        }
    ],
    totalAmount: 0,
    totalVat: 0,
};
