/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { WatermarkComponent } from '../../components/watermark/watermark.component';
import { LogoHeaderComponent } from '../../components/logo-header/logo-header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, WatermarkComponent, LogoHeaderComponent],
})
export class HomePageModule {}
