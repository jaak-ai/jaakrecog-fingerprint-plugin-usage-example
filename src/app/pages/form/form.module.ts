/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { WatermarkComponent } from '../../components/watermark/watermark.component';
import { LogoHeaderComponent } from '../../components/logo-header/logo-header.component';
import { AlertModalSuccessComponent } from '../../components/alert-modal-success/alert-modal-success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormPageRoutingModule,
  ],
  declarations: [FormPage, WatermarkComponent, LogoHeaderComponent, AlertModalSuccessComponent],
})
export class FormPageModule {}
