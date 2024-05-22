import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Musica } from '../domain/Musica';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: Firestore) { }

  save(musica: Musica){
    addDoc(collection(this.fireStore, 'canciones'),Object.assign({},musica))
  }


}
