import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal-success',
  templateUrl: './alert-modal-success.component.html',
  styleUrls: ['./alert-modal-success.component.scss'],
})
export class AlertModalSuccessComponent implements OnInit {
  @Input() eventId: string;
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  close(): void {
    this.modalCtrl.dismiss();
  }

  copy(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.eventId;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showToast();
  }

  async showToast(): Promise<void> {
    const alert = await this.toastCtrl.create({
      color: 'success',
      message: 'Se ha copiado con éxito',
      duration: 3000,
      position: 'top'
    });
    await alert.present();
  }
}
