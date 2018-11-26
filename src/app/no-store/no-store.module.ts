import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoStoreComponent } from './no-store.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NoStoreComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        NoStoreComponent
    ],
})
export class NoStoreModule { }
