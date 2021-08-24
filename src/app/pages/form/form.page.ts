/*
 * * JAAK-IT SAPI DE CV - All Rights Reserved
 * * Unauthorized copying of this file, via any medium is strictly prohibited
 * * Proprietary and confidential
 * * Written by root < jesus.serrano@jaak-it.com >, 2021
 * * Support <support@jaak-it.com>
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FingerPrint } from 'jaakrecog-fingerprint';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      accessKey: ['', [Validators.required]],
    });
  }

  async createToast(
    message: string,
    color: string
  ): Promise<HTMLIonToastElement> {
    const alert = await this.toastCtrl.create({
      color: color,
      message: message,
      duration: 3000,
    });

    return alert;
  }

  async initPlugin(): Promise<void> {
    if(this.form.valid){
      /* Execute plugin */
      console.log(this.form.value.accessKey);
      FingerPrint.callFingerAcequisition(this.form.value.accessKey);
    }else {
      const alert = await this.createToast('Verifica el formulario', 'danger');
      await alert.present();
    }
    
  }
}
