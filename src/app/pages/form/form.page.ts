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
      const accessToken =
        'ae00738e523998b0c782b06c2c2314675ff01fe1710b006dd3f3f22b6e4ca7388445c16d3b837b7ad89b0ab1ee10ec336def3780d916f6bc103dc380ec0d4df7';
      const isDevelop = false;

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const options = { accessToken, is_production: isDevelop };
      FingerPrint.callFingerAcquisition(options)
        .then((resp) => resp.eventIdLeft)
        .then((data) => {
          this.createAlert(data);
        }).catch(async (e) => {
          console.log(e);
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
