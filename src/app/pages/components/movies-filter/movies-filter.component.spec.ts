import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { MoviesFilterComponent } from './movies-filter.component';
import { Movie } from 'src/app/interfaces/movie.interface';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('MoviesFilterComponent', () => {
  let component: MoviesFilterComponent;
  let fixture: ComponentFixture<MoviesFilterComponent>;
  let service: LandingPageService
  let responseMockMovies: Movie[] = [
    {
      "cartelera": true,
      "descripcion": "Superman (Henry Cavill) se ha convertido en la figura más controvertida del mundo. Mientras que muchos siguen creyendo que es un emblema de esperanza, otro gran número de personas lo consideran una amenaza para la humanidad. Para el influyente Bruce Wayne (Ben Affleck), Superman es claramente un peligro para la sociedad, su poder resulta imprudente y alejado de la mano del gobierno. Por eso, ante el temor de las acciones que pueda llevar a cabo un superhéroe con unos poderes casi divinos, decide ponerse la máscara y la capa para poner a raya al superhéroe de Metrópolis. Mientras que la opinión pública debate sobre el interrogante de cuál es realmente el héroe que necesitan, el Hombre de Acero y Batman, enfrentados entre sí, se sumergen en una contienda el uno contra el otro. La rivalidad entre ellos está alimentada por el rencor y la venganza, y nada puede disuadirlos de librar esta guerra. Hostigados por el multimillonario Lex Luthor (Jesse Eisenberg), Batman y Superman se ven las caras en una lucha sin precedentes. Pero las cosas se complican cuando una nueva y peligrosa amenaza pronto cobra fuerza, poniendo a toda la humanidad en el mayor peligro que nunca se haya conocido antes. Esta nueva y oscura amenaza, que surge con la figura de un tercer hombre con poderes superlativos llamado Doomsday, puede poner en serio peligro al mundo y causar la destrucción total. Será entonces cuando el Último Hijo de Krypton y el Caballero Oscuro unan sus fuerzas con Wonder Woman (Gal Gadot) para enfrentarse todos juntos a esta amenazante nueva máquina de matar.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/BatmanVSSuperman.jpg?alt=media&token=e8599cd9-001c-4679-97bf-797ce34a4c49",
      "likes": 54,
      "nombre": "Batman vs Superman",
      "trailer": "https://www.youtube.com/watch?v=0WWzgGyAH6Y"
    },
    {
      "cartelera": true,
      "descripcion": "En un futuro no muy lejano, legiones de gigantescas criaturas monstruosas comienzan a salir misteriosamente de las profundidades del mar con el objetivo de iniciar una guerra contra la humanidad que puede destruir millones de vidas y agotar todos los recursos que el ser humano necesita para sobrevivir. Estas terribles criaturas, hasta entonces desconocidas por la raza humana, son denominadas Kaiju, nombre que hace referencia a las películas sobre grandes y espeluznantes criaturas propias del género cinematográfico japonés que comparte el mismo nombre.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/pacific-rim.jpg?alt=media&token=ccfa169c-b69c-457f-b22f-9b2623829cdd",
      "likes": 36,
      "nombre": "Pacific Rim 2013",
      "trailer": "https://www.youtube.com/watch?v=K-ZcqwvQbas"
    },
    {
      "cartelera": true,
      "descripcion": "Arizona, 1873. Un extraño (Craig), que no recuerda su pasado, acaba por casualidad en el duro y desértico pueblo de Absolution. La única pista sobre esta misteriosa historia es un grillete que lleva enganchado en su muñeca. Pronto descubre que los forasteros no son bienvenidos en Absolution y que nadie mueve un dedo en sus calles sin que se lo ordene el Coronel (mano de hierro) Dolarhyde Ford. Es un pueblo que vive sumido en el miedo. Pero Absolution está a punto de experimentar un pánico incompresible cuando la desolada ciudad es atacada por unos maleantes desde el cielo. Haciendo un gran ruido y a una impresionante velocidad, las luces cegadoras abducen a los indefensos uno a uno, desafiando todo lo que los residentes conocían hasta ahora.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/cowboys_aliens.jpg?alt=media&token=f0feda4c-8d96-4c85-8460-34f07e484a5c",
      "likes": 61,
      "nombre": "Cowboys & Aliens",
      "trailer": "https://www.youtube.com/watch?v=MqCp2PmRyXg"
    },
    {
      "cartelera": true,
      "descripcion": "Una historia alrededor de la población vasca bombardeada por la aviación nazi en abril de 1937, durante la Guerra Civil Española. En ese contexto, la joven Teresa (María Valverde), una editora de la oficina de prensa republicana chocará con Henry (James D’Arcy), un periodista americano en horas bajas que está cubriendo el conflicto. Teresa, cortejada por su jefe, Vasyl (Jack Davenport), asesor soviético del gobierno republicano, se sentirá atraída por el idealismo durmiente de Henry y querrá despertar en él la pasión por contar la verdad, que un día fue su único objetivo.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/gernika.jpg?alt=media&token=3d155363-4c30-4ef9-a283-88c4e5b94b3a",
      "likes": 12,
      "nombre": "Gernika",
      "trailer": "https://www.youtube.com/watch?v=uuKl2dIiUzM"
    },
    {
      "cartelera": true,
      "descripcion": "El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/guardians-galaxy.jpg?alt=media&token=74165e61-3cb0-4f8d-9d13-d3a284bed725",
      "likes": 98,
      "nombre": "Guardianes de la Galaxia",
      "trailer": "https://www.youtube.com/watch?v=qdIuXCfUKM8"
    },
    {
      "cartelera": true,
      "descripcion": "Cuando un meteorito lleno de mugre espacial transforma a Susan Murphy en una gigante, el Gobierno le concede el nombre de Ginormica y la encierra en una instalación secreta con otros monstruos, como el Dr. Cucaracha, cabeza de insecto. Cuando un robot extraterrestre llega a la Tierra y empieza una masacre, el general W.R. Monger convence al presidente para que envíe a Ginormica y a los monstruos a enfrentarse a la máquina y salvar al planeta.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/mostruos_vs_alienigenas.jpg?alt=media&token=ab294796-56f2-4e72-80c8-325ca8a21500",
      "likes": 33,
      "nombre": "Monstruos vs Alienígenas",
      "trailer": "https://www.youtube.com/watch?v=UzZRJTeMb0E"
    },
    {
      "cartelera": false,
      "descripcion": "El Imperio Galáctico ha terminado de construir el arma más poderosa de todas, la Estrella de la muerte, pero un grupo de rebeldes decide realizar una misión de muy alto riesgo: robar los planos de dicha estación antes de que entre en operaciones, mientras se enfrentan también al poderoso Lord Sith conocido como Darth Vader, discípulo del despiadado Emperador Palpatine. Film ambientado entre los episodios III y IV de Star Wars.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/RogueOneP.jpg?alt=media&token=b6512e2b-cf0b-4c43-858a-b660c06533d9",
      "likes": 0,
      "nombre": "Rogue One",
      "trailer": "https://www.youtube.com/watch?v=frdj1zb9sMY"
    },
    {
      "cartelera": false,
      "descripcion": "Dos adolescentes pacientes de cáncer inician un viaje para reafirmar sus vidas y visitar a un escritor solitario en Ámsterdam.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/stars.jpg?alt=media&token=149a3872-b3bf-48e4-88fd-2c9811645521",
      "likes": 0,
      "nombre": "Bajo la misma Estrella",
      "trailer": "https://www.youtube.com/watch?v=9Lt8QAZkc94"
    },
    {
      "cartelera": false,
      "descripcion": "Ahmanet, una antigua princesa egipcia maldita, despierta en su cripta y, furiosa y malvada, siembra el terror entre los humanos. La única persona que puede detenerla y evitar que arrase Londres es un intrépido mercenario.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/the_mummy.jpg?alt=media&token=780e6a7f-db36-4bc4-a82e-eb3c8a247ebe",
      "likes": 0,
      "nombre": "La Momia",
      "trailer": "https://www.youtube.com/watch?v=b6iqUM7bxk4"
    },
    {
      "cartelera": false,
      "descripcion": "El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y le vuelve perverso.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/venom.jpg?alt=media&token=f8b5517b-bc53-4202-9c00-26d15555b1d8",
      "likes": 0,
      "nombre": "Venom",
      "trailer": "https://www.youtube.com/watch?v=mYTmQWZkw10"
    },
    {
      "cartelera": false,
      "descripcion": "Un desertor de la escuela de medicina intenta ocultar su atracción hacia su nueva amiga (Zoe Kazan), una brillante artista que ya tiene novio.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/what_if.jpg?alt=media&token=335faa4d-01e0-44a4-825e-b43635fe375b",
      "likes": 0,
      "nombre": "¿Sólo amigos?",
      "trailer": "https://www.youtube.com/watch?v=-CuAGFDpVpU"
    },
    {
      "cartelera": false,
      "descripcion": "Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.",
      "idioma": "Español",
      "imagen": "https://firebasestorage.googleapis.com/v0/b/cinemax-74393.appspot.com/o/wonder_woman.jpg?alt=media&token=174fb301-52ae-4b8d-aae4-2bf7cf4a1dc3",
      "likes": 0,
      "nombre": "La mujer maravilla",
      "trailer": "https://www.youtube.com/watch?v=DYhqqzo2xOI"
    }
  ]


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesFilterComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesFilterComponent);
    component = fixture.componentInstance;
    service = component._landingservice
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject service Landingpage', () => {
    expect(service).toBeTruthy()
  })

  it('should call Getmovies() from service Landingpage', () => {
    let request = spyOn(service,'getMovies').and.returnValue(of(responseMockMovies))
    component.ngOnInit()
    expect(request).toHaveBeenCalled()
  })

  it('should be at least one movie', () => {
    // se realiza pero indagando un poco es una estupidez evaluar un metodo 
    // de un api con un mock por su valor ya que fallara al cambiar mi mock
    // el objetivo real es evaluar la interaccion del servicio
    spyOn(service,'getMovies').and.returnValue(of(responseMockMovies))
    component.ngOnInit()
    expect(component.moviesName.length).toBeGreaterThanOrEqual(1)
  })

  it('should be maximun seven dates', () => {
    expect(component.dateArray.length).toBe(8)
  })

});
