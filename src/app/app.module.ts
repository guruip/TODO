import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TodoModules } from "./modules/todo/todo.module";
import { RouterModule } from "@angular/router";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '**',
                redirectTo: ''
            }
        ]),
        StoreModule.forRoot({}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        TodoModules,
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
