/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {LoginResponse, OidcSecurityService} from 'angular-auth-oidc-client';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((auth: LoginResponse) => {
      if (!auth.isAuthenticated) {
        this.oidcSecurityService.authorize();
        // this.router.navigate(['/auth/login']);
      }
    });

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
