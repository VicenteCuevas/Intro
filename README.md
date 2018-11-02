# Intro
Proyecto creado para el ramo "Introduccion a la ingeniería"

## Pasos de descarga
Primero que todo, usted debe tener instalado [Ionic Framework](https://ionicframework.com/getting-started#cli)


1. Primero se debe clonar el repositorio, usamos:

   ```bash
   $ git clone https://github.com/VicenteCuevas/Intro.git 
   ```
   
2. Ingresamos al directorio del proyecto y ejecutamos `ionic serve`:

   ```bash
   $ cd Intro
   $ ionic serve
   ```
   Esto nos mostrará lo siguiente:
   
   ```bash
   [INFO] Looks like @ionic/app-scripts isn't installed in this project.
       
       This package is required for this command to work properly. The package 
       provides a CLI utility, but the ionic-app-scripts binary was not found in 
       your PATH.
   ? Install @ionic/app-scripts? (Y/n) 
   ```
  
   Responderemos `Y`

   Notaremos que se nos abrirá el navegador y nos dará el siguiente error:

   ```
   Typescript Error
   Cannot find module './app.firebase.config'.
   ```
   El cuál solucionaremos en el siguiente punto   

3. Se debe crear un proyecto en [Firebase](https://firebase.google.com) y crear un archivo en la directorio `src/app/` llamado `app.firebase.config.ts` que contenga lo siguiente:

   ```typescript
   export const FIREBASE_CONFIG = {
    apiKey: <api-key>,
    authDomain: <auth-domain>,
    databaseURL: <database-url>,
    projectId: <project-id>,
    storageBucket: <storage-bucket>,
    messagingSenderId: <messagingSenderId>
    }
    ```
    Reemplazando con tus respectivos datos, obtenidos de la consola de firebase de tu respectivo proyecto
   
   Con esto ya deberíamos ser capaces de ver nuestra app en el browser, para un testeo más avanzado se recomienda el comando:
   ```bash
   $ ionic cordova run browser
   ```
   Esto nos instalará soporte para correr cordova en el browser, tambien pueden correr una emulacion de android y ios reemplazando respectivamente, para más información revise la [documentación ofical de Ionic](https://ionicframework.com/docs/)
