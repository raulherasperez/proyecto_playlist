const poems = [
  {
    title: "Lo lograste",
    text: `lo lograste
cómo si las leyes de la naturaleza 
fueran una broma para ti,
cómo las que compartimos en cada pensamiento,
casi sin querer,
cómo si controlarás a tu antojo la paleta de colores de mi mundo,
has conseguido cambiar el azul.
el azul ya no es azul, 
es una sonrisa tonta al despertarme,
la misma que me viste al acostarme,
es ese abrazo y ese beso guardado en una cápsula del tiempo,
creciendo como las más bellas flores.
pintaste un camino trazado improvisadamente,
corrigiendo las curvas de las prisas
en una firme recta con paisajes a los lados.
cambiaste las propiedades de la luz y la percepción,
tornando la frialdad del color del mar
en una calidez que mientras más envuelve, más promete.
pintando mi vida en tu azul,
en ese azul en el que quiero perderme.`
  },
  {
    title: "Fin de año",
    text: `Todo fin es un principio.

Calculo que estás palabras las leerás en los primeros compases del año entrante, algunos minutos después de las famosas campanadas, entre los vítores de las familias y el sonido de las copas chocando en el tradicional brindis.

En ese preciso momento estaré pensando en ti, como acostumbra mi mente a estar entretenida desde ese inocente chiste que hice sin saber las maravillas que desencadenaría. Y en ese instante, menos de medio minuto me bastarán para enviarte esta carta.
Empecé el año como cualquier otro. Sin propósitos, ya que nunca creí en ellos. Sin un objetivo, más allá de terminar mi carrera. Solo con una promesa al cielo y a mí mismo, ser feliz. 

365 días después, me encuentro en el mismo pueblo remoto de la provincia de Córdoba, realizando un brindis en el que estás presente en el fondo de mi corazón. Sin propósitos. Sin un objetivo, más allá que terminar el máster. La promesa sigue siendo la misma, ser feliz. Pero este año añado un detalle más a la promesa. No solo prometo tanto al cielo como a mí mismo ser feliz, sino que me prometo a mí mismo y a ti, que seamos felices juntos. 
Ya que lo bueno se hace esperar, has irrumpido en mi vida llenando de color a tu paso como solo un destello de luz colándose por las vidrieras de una catedral, iluminandome con cada pedacito de tu mosaico, evocando a su vez calidez y calma, energía y paz.

Eres la razón por la que mis hoyuelitos aparecen más a menudo, confusos ante tanta salida al mundo, con una frecuencia que hace que sonría a la pantalla y tú foto como si tuviera el mismísimo secreto de la felicidad ante mis ojos. 

Aunque bueno, se suele decir que la felicidad realmente está en las pequeñas cosas, como esos destellos de ternura que sueltas dejando abrir tu coraza, intensificando la calidez de la luz que desprendes. Dejándome todas las noches una sensación de paz que me llevo al mundo de Morfeo con ese mensaje que me desea un próspero descanso, y poniendo esa sonrisa inocente por las mañanas cuando, inevitablemente, te despiertas antes que yo y me anuncias un nuevo día. Porque querida, todos los días son buenos, o al menos un poquito mejores, cuando estás en mi vida.

El hecho de que sea un año nuevo pasa a ser casi secundario ante el hecho de que estamos un día más cerca de vernos. Un día más cerca de que esas dos gemas me miren y encuentren en mí una mirada llena de amor y admiración. Un día más cerca en el que sientas mi corazón latir desbocado en el primer abrazo de muchos. Un día en el que podré verbalizar en voz alta al menos la mitad de las cosas que no te escribo, porque la otra mitad se pierden entre la vergüenza y la perplejidad que intuyo sentiré ante tu belleza.

Todo fin es un principio. Y esta vez este principio es nuestro.
Feliz año, Andrea. Mi princesa, mi medusilla.`
  },
    {
    title: "Pureza",
    text: `si alguien me preguntara por el significado de pureza,
nunca podría definirla con palabras.
tendría que ver tus ojos cuando me miran
tu sonrisa antes de un beso,
tus mejillas sonrojadas al escucharme diciendo lo que siento,
o tus facciones suavizandose al decirme lo que ves en mi.
tendría que mirar un mapa de nuestro camino,
imposible, ya que es infinito,
yendo a escala 1 segundo: toda una vida,
fijándose en cada centímetro de papel para admirar el paisaje que se forma al juntarse nuestras manos.
no conozco nada más puro que lo siento cuando te veo.`
  },
  {
    title: "Luz",
    text: `Eres luz.

Aunque creas que seas oscuridad,
cariño, alumbras el mundo,
el Sol no tiene nada que envidarte,
brillas como una divinidad.

Mírate al espejo,
¿deseas pedir más?
Estás esculpida en mármol,
no voy a ser yo quien te niegue la divinidad.

Mírame, fijamente.
Son los ojos de tu amado.
Brillan porque te miran, mi vida,
todo brilla desde que estás a mí lado.

Andrea, sé siempre tu misma, 
dejas luz por donde pasas.
El mundo siempre fue tuyo,
tienes la belleza de una diosa.

Ilumíname, medusilla.
Porque le das color a mi vida.`
  },
  {
    title: "Te quiero",
    text: `Te quiero.

Por saber sacar siempre lo mejor de mi,
como si supieras el momento exacto,
el instante preciso,
para que mi mente haga clic.

Por la forma en la que me miras,
reflejando la luz del mundo en tus pupilas azules,
iluminando día a día mi vida,
haciendo camino entre las sombras.

Por la forma en la que ríes y sonríes,
apagando el ruido que nos rodea, 
haciendo que se desenreden mis entresijos 
y mí mente quede en calma.

Por la forma en la que me tocas,
con esa piel tan suave y cariñosa,
esas caricias que calman y sanan.
Y esos besos. Ay, esos besos.

Por cómo te admiro y aspiro a parecerme,
con esa fuerza capaz de arrasar con todo,
ese carácter firme y sin miedo, 
esa mente brillante que me deja fascinado.

Por como me lees, me escribes y me ves,
llegando al fondo de mi complejo sistema,
cómo si fueras tú quien hackea,
vas a tener que ser mi maestra.

Nunca podría acabar la lista, 
el infinito no se puede escribir.

Te quiero.`
  },


];

const poemsList = document.querySelector("#poemsList");
const poemOverlay = document.querySelector("#poemOverlay");
const poemModalTitle = document.querySelector("#poemModalTitle");
const poemModalText = document.querySelector("#poemModalText");
const closePoemButton = document.querySelector("#closePoemButton");

function escapePoemHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPoemCard(poem, index) {
  return `
    <button class="poem-card" type="button" data-poem-index="${index}" style="--item-index: ${index}">
      <span class="section-kicker">Poema ${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapePoemHtml(poem.title)}</strong>
      <small>${escapePoemHtml(poem.text.split("\n").find(Boolean) || "Abrir poema")}</small>
    </button>
  `;
}

function openPoem(index) {
  const poem = poems[index];
  if (!poem) {
    return;
  }

  poemModalTitle.textContent = poem.title;
  poemModalText.textContent = poem.text;
  poemOverlay.hidden = false;
  closePoemButton.focus();
}

function closePoem() {
  poemOverlay.hidden = true;
}

if (poemsList) {
  poemsList.innerHTML = poems.map(renderPoemCard).join("");
  poemsList.addEventListener("click", (event) => {
    const card = event.target.closest(".poem-card");
    if (!card) {
      return;
    }

    openPoem(Number(card.dataset.poemIndex));
  });
}

if (closePoemButton) {
  closePoemButton.addEventListener("click", closePoem);
}

if (poemOverlay) {
  poemOverlay.addEventListener("click", (event) => {
    if (event.target === poemOverlay) {
      closePoem();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && poemOverlay && !poemOverlay.hidden) {
    closePoem();
  }
});
