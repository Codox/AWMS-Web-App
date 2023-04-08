/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private analytics: AnalyticsService,
    private seoService: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {

      console.log('is authenticated', auth);
    });

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
