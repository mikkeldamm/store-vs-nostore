import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'no-store',
        loadChildren: './no-store/no-store.module#NoStoreModule',
    },
    {
        path: 'with-store',
        loadChildren: './with-store/with-store.module#WithStoreModule',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
