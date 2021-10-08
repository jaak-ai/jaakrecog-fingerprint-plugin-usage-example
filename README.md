<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://jaakrecog.com/assets/jaakrecog-logo.svg" alt="Logo" width="161" height="39">
  </a>

  <h3 align="center">JAAKRECOG FINGERPRINT PLUGIN USAGE EXAMPLE</h3>

  <p align="center">
    This project was developed for demonstration use and exemplification of how to use JAAKRecog Fingerprint Plugin with capacitor (https://github.com/jaak-it/jaakrecog-fingerprint-capacitor)
    <br />
    <a href="https://www.jaakrecog.com"><strong>Conoce nuestros productos»</strong></a>
    <br />
    <br />
    <a href=""https://www.jaakrecog.com/Demo">Descarga nuestra demo</a>
    ·
    <a href="https://jaak-it.atlassian.net/servicedesk/customer/portal/2">Report Bug</a>
    ·
    <a href="https://jaak-it.atlassian.net/servicedesk/customer/portal/2">Request Feature</a>
  </p>
</div>


# Estado y versiones


# Prerequisitos

* Instalar nodejs según corresponda a su sistema operativo (https://nodejs.org/en/download/), se requiere la versión 12.22 o superior

* Instalar los componentes de capacitor 

```sh
npm install @capacitor/core
npm install @capacitor/cli --save-dev
```

* Se debe de tener instalado

Android Studio para la compilación y ejecución de proyectos Android

https://developer.android.com/studio/install

Xcode para los proyecto de iOS

https://apps.apple.com/us/app/xcode


# Como instalar

* Ejecute el comando para instalar la versión que necesite del componente de JAAKRecog-fingerprint

Version estable

```sh
npm install jaakrecog-fingerprint
```

Version de desarrollo
```sh
npm install jaakrecog-fingerprint@<version>
```

* Para la ejecución de iOS es necesario la instalación de cocoapods(https://guides.cocoapods.org/using/getting-started.html#installation)

```sh
sudo gem install cocoapods
```

or

```sh
brew install cocoapods
```

* Instalar los componentes para la plataforma

Android
```sh
npm install @capacitor/android
```

iOS
```sh
npm install @capacitor/ios
```

Este comando actulizara a la ultima versión publicada del componente


* Creamos el proyecto para Android o iOS segun corresponda

```sh
npx cap add android
```

```sh
npx cap add ios
```

Construimos la app 

```sh
ionic build
```

* Descargamos y compilamos las depenciencias para su ejecución nativa

```sh
npx cap sync
```

* Si se requiere una versión especifica para un dispositivo se puede ejecutar

para android 
```sh
npx cap sync android
```

para IOs 
```sh
npx cap sync ios
```

* Lanzar el proyecto

```sh
ionic cap build android
```

o para abrir proyectos

```sh
npx cap open android
```

```sh
ionic cap build ios
```

o

```sh
npx cap open ios
```

* Esperar que el proyecto termine de sincronizar

# Actualizar libreria de jaakrecog-fingerprint

````sh
npm install jaakrecog-fingerprint@<version>
npx cap sync android
ionic capacitor build android
````


