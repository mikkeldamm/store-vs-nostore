import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WithStoreComponent } from './with-store.component';

const routes: Routes = [
    {
        path: '',
        component: WithStoreComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        WithStoreComponent,
    ],
})
export class WithStoreModule { }
