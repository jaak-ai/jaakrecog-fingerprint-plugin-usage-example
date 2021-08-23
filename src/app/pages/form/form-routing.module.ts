/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form.page';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
