import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBlocklyModule } from '../../projects/ngx-blockly/src/lib/ngx-blockly.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxBlocklyModule.forRoot(
            {
                defaultBlocks: true,
                defaultLanguage: 'en',
                languages: ['blockly/msg/en', 'blockly/msg/de'],
                debug: false
            })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
