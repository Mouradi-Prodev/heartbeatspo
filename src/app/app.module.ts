import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"heartbeatspo","appId":"1:155276214310:web:14d32ceb06544b8c5926e7","databaseURL":"https://heartbeatspo-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"heartbeatspo.firebasestorage.app","apiKey":"AIzaSyAcUEwDl5Yep356LvrifnY7qc-x4p9H_Ho","authDomain":"heartbeatspo.firebaseapp.com","messagingSenderId":"155276214310"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
