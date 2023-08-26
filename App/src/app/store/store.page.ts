import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
  dcto: number;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

products: Product[] = [
  {
    id: 1,
    name: 'Mario Kart™ 8 Deluxe',
    desc: 'Un total de 48 pistas más llegan corriendo al juego Mario Kart 8 Deluxe como contenido descargable de pago*. La nueva pista Bañódromo te ofrece una perspectiva diminuta desde un baño con temática de Mario (que incluye la tina y todo lo demás). Disfruta del sol en la pista Crucero Daisy y lánzate sin miedo en la pista Colina de Koopa que son pistas que regresan de juegos anteriores de la serie Mario Kart. El contenido será lanzado en 6 olas de 8 pistas hasta finales del año 2023.',
    price: 69990,
    image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70070000013723/68c93679136e00595184c8abc6fef8deb7e50abc33a83912b6b51b6d033243bf',
    dcto: 10
  },
  {
    id: 2,
    name: 'Super Smash Bros.™ Ultimate',
    desc: '¡Un auténtico duelo de titanes de los videojuegos que podrás jugar cuando quieras y donde quieras! Lanza a tus rivales del escenario usando uno de los nuevos personajes como Simon Belmont o King K. Rool que se unen a Inkling, Ridley y a todos los combatientes presentes en la historia de Super Smash Bros. Disfruta de la velocidad mejorada y combate en los nuevos escenarios basados en las series de Castlevania, Super Mario Odyssey y otras.',
    price: 69990,
    image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9',
    dcto: 5
  },
  {
    id: 3,
    name: 'The Legend of Zelda™: Breath of the Wild',
    desc: 'Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.',
    price: 69990,
    image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
    dcto: 30
  }
];

  constructor() { }

  formatPrice(price: number): string {
    return '$ ' + price.toLocaleString('es-CL', { minimumFractionDigits: 0 });
  }

  ngOnInit() {

  }

}
