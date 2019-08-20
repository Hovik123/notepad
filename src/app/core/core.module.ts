import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpTokenInterceptor } from '@core/interceptors/http-token.interceptor';
import {throwIfAlreadyLoaded} from '@core/guard/module-import-guard';
import {BASE_API_URL} from '@core/constants';
import {environment} from '@environments/environment';
import {GistService} from '@core/services/gist.service';
import {HttpRequestInterceptor} from '@core/interceptors/http-request.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: BASE_API_URL, useValue: environment.apiUrl },
    GistService
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
