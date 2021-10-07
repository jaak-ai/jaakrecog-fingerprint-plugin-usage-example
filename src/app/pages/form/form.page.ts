/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { FingerPrint, FingerPrintPlugin } from 'jaakrecog-fingerprint';
import { AlertModalSuccessComponent } from '../../components/alert-modal-success/alert-modal-success.component';
import * as Sentry from "@sentry/capacitor";

//FingerPrintPlugin
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  async initPlugin(): Promise<void> {
    if (this.form.valid) {
      /* Execute plugin */
      const isDevelop = false;

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const options = { accessToken: this.form.value.accessToken, is_production: isDevelop };
      FingerPrint.callFingerAcquisition(options)
        .then((resp) => resp.eventIdLeft)
        .then((data) => {
          this.createAlert(data);
        }).catch(async (e) => {
          console.log(e);
          Sentry.captureException(e);
          const alert = await this.createToast('Ha ocurrido un error', 'danger');
          await alert.present();
        });
    } else {
      const alert = await this.createToast('Verifica el formulario', 'danger');
      await alert.present();
    }
  }

  async createToast(
    message: string,
    color: string
  ): Promise<HTMLIonToastElement> {
    const alert = await this.toastCtrl.create({
      color,
      message,
      duration: 3000,
    });

    return alert;
  }

  private async createAlert(eventId: string): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AlertModalSuccessComponent,
      componentProps: {
        eventId,
      },
    });
    await modal.present();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      accessToken: ['', [Validators.required]],
    });
  }
}
