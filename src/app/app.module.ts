import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { withStoreReducer } from './with-store/store/with-store.reducer';
import { withStoreProvider } from './with-store/store/with-store.store';
import { WithStoreEffects } from './with-store/store/with-store.effects';
import { VatService } from './vat.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ withStore: withStoreReducer }),
        EffectsModule.forRoot([ WithStoreEffects ]),
    ],
    providers: [
        withStoreProvider,
        VatService,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
