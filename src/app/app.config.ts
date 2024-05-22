import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"demo64-fa10b","appId":"1:253714269755:web:858768659193eafdb9fe1e","storageBucket":"demo64-fa10b.appspot.com","apiKey":"AIzaSyBS4J_fb2xkyPw683XkqLxGfPfwXf9DMx0","authDomain":"demo64-fa10b.firebaseapp.com","messagingSenderId":"253714269755"})), provideFirestore(() => getFirestore())]
};
