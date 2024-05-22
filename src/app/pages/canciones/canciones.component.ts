import { Component } from '@angular/core';
import { Musica } from '../../domain/Musica';
import { FireStoreService } from '../../services/fire-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss'
})
export class CancionesComponent {

  musica: Musica = new Musica()

  constructor(private fireStoreService: FireStoreService){}

  guardar(){
    this.fireStoreService.save(this.musica)
  }
}
