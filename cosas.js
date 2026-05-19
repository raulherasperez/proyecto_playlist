const things = [
  { title: "Vainilla", image: "assets/cosas/vainilla.jpg", imageAlt: "Vainilla.", text: "Cada vez que algo o alguien huele un mínimo a vainilla, me tengo que girar a ver si eres tú. Adoro ese olor, eres tú." },
  { title: "Bob Esponja", image: "assets/cosas/bob.jpg", imageAlt: "Bob Esponja.", text: "Tu serie favorita y tu tatuaje que tanto me llamó la atención. Aura pura, me encanta, cariño." },
  { title: "Medusas y animales marinos", image: "assets/cosas/medusa.jpg", imageAlt: "Medusa y animales marinos.", text: "Me parece un interés precioso, y cada vez que veo algo relacionado es imposible no acordarme de ti" },
  { title: "Pompas de jabón", image: "assets/cosas/burbujas.jpg", imageAlt: "Pompas de jabón.", text: "La historia de las pompas en el parque y el pompero que me regalaste me hizo muchísima gracia." },
  { title: "El color rosa", image: "assets/cosas/rosa.png", imageAlt: "Color rosa.", text: "Bueno, es tu color, simple." },
  { title: "El color azul clarito", image: "assets/cosas/azul.png", imageAlt: "Color azul clarito.", text: "Y el azul es nuestro color, no se en qué momento se deicidió, pero me encanta." },
  { title: "Barbie", image: "assets/cosas/barbie.jpg", imageAlt: "Barbie.", text: "Mi Barbie internacionalista, el outfit rosa que llevaste al Córner hace justicia a ello." },
  { title: "Las flores", image: "assets/cosas/tulipanes.jpeg", imageAlt: "Flores.", text: "Las flores en general me recuerdan a ti, pero sobre todo los tulipanes, tus flores favoritas." },
  { title: "El sol en invierno", image: "assets/cosas/sol.jpg", imageAlt: "Sol en invierno.", text: "Cada sábado de invierno que me daba un rayito de sol en el frío mientras iba a clase me recordaba a lo que me haces sentir cuando estamos juntos." },
  { title: "WOS", image: "assets/cosas/wos.jpeg", imageAlt: "WOS.", text: "Descrubrí a este artista en profundidad gracias a tí, y te veo en cada canción que escucho, sobre todo en Alma Dinamita y Morfeo" },
  { title: "Falling in Reverse", image: "assets/cosas/falling.jpg", imageAlt: "Falling in Reverse.", text: "Redescubrí este grupo gracias a Her Songs, cada vez que escucho alguna canción me acuerdo de ti." },
  { title: "Delaossa", image: "assets/cosas/delaossa.jpg", imageAlt: "Delaossa.", text: "Las dos caras del mismo artista. Tus canciones favoritas son las más melódicas, las mías las más raperas. Pero Ojos Verdes es tu canción, y Lejos la nuestra." },
  { title: "La música clásica", image: "assets/cosas/musica_clasica.jpg", imageAlt: "Música clásica.", text: "Pese al amor que le tengo a la música, no conozco nada de música clásica, y contigo tengo a la mejor profesora. Quiero que me enseñes tantas cosas de ella." },
  { title: "El sonido de flauta", image: "assets/cosas/flauta-traversa1.jpg", imageAlt: "Flauta travesera.", text: "Admiro tanto la parte artística que tienes, es increíble, me encantó verte tocar algo con la flauta, y su sonido es tan melódico y tan dulce...como tú." },
  { title: "Los camiones grandes", image: "assets/cosas/camion.jpg", imageAlt: "Camión grande.", text: "Es tan tan random y tan gracioso, me encanta." },
  { title: "Psyduck/Mudkip/Swampert", image: "assets/cosas/psyduck.png", imageAlt: "Psyduck.", text: "No será tu Pokémon favorito, pero tu llaverito de Psyduck me llamó mucho la atención." },
  { title: "Yassine Bounou", image: "assets/cosas/bono.jpg", imageAlt: "Yassine Bounou.", text: "Dios, me acuerdo de ti cada vez que me lo sacan en el FIFA, que sufrimiento, que bueno es" },
  { title: "El Sevilla", image: "assets/cosas/sevilla.jpg", imageAlt: "Sevilla FC.", text: "Y mira que soy bético eh..." },
  { title: "El Feyenoord", image: "assets/cosas/feyenoord.jpeg", imageAlt: "Feyenoord.", text: "Y encima gustándome el Ajax. Algún día iremos a ver un partido al estadio." },
  { title: "Perros labrador/golden retriever", image: "assets/cosas/golden.jpg", imageAlt: "Golden retriever.", text: "Por mucho que no lo vea siempre dices que soy un golden. Tu Golden Retriever." },
  { title: "Gatos negros", image: "assets/cosas/gato.jpg", imageAlt: "Gato negro.", text: "La gente me suele ver como un gato negro, pero la gata negra siempre seras tú, y me encanta." },
  { title: "SIX SEVEEEN", image: "assets/cosas/six seven.jpg", imageAlt: "Six seven.", text: "SIX SEVEEEN" },
  { title: "Taco Bell", image: "assets/cosas/taco-bell.jpg", imageAlt: "Taco Bell.", text: "La primera vez que cenamos juntos, tremendo gusto tienes. Claro, estás conmigo." },
  { title: "El cine de Nervión", image: "assets/cosas/cine.jpeg", imageAlt: "Cine de Nervión.", text: "Aunque la peli no fuera del agrado de ninguno de los dos, siempre me acordaré de ti cuando vaya." },
  { title: "El casino del Lagoh", image: "assets/cosas/casino.jpg", imageAlt: "Casino del Lagoh.", text: "El billar del Lagoh siempre tendrá mi victoris y tu pedazo de outfit. Pero sobre todo mi victoria." },
  { title: "La Estrella Galicia", image: "assets/cosas/estrella galicia.jpg", imageAlt: "Estrella Galicia.", text: "Nuestra cerveza, al final he terminado por preferirla a cualquier otra." },
  { title: "Nami/Lulu/Annie", image: "assets/cosas/Nami_1.jpg", imageAlt: "Nami.", text: "Lulu será tu main, pero Nami siendo del mar me recuerda tanto a ti, y Annie bueno, es que soy tu osito." },
  { title: "Press de pierna", image: "assets/cosas/Leg-Press-Machine-D3-6.jpg", imageAlt: "Máquina de press de pierna.", text: "MMMMM PATAS" },
  { title: "La parada de metro de San Bernardo y de Cavaleri", image: "assets/cosas/M1-10-San-Bernardo4.jpg", imageAlt: "Parada de metro de San Bernardo.", text: "Me encanta verte subir por las escaleras y ver como se te iluminan los ojazos que tienes al verme." },
  { title: "Terrorismo", image: "assets/cosas/terrorismo.jpg", imageAlt: "Imagen relacionada con terrorismo.", text: "JEJJEJEJEEJEJ, no tengo nada más que decir." }
];

const thingsGrid = document.querySelector("#thingsGrid");
const thingOverlay = document.querySelector("#thingOverlay");
const thingModalImage = document.querySelector("#thingModalImage");
const thingModalTitle = document.querySelector("#thingModalTitle");
const thingModalText = document.querySelector("#thingModalText");
const closeThingButton = document.querySelector("#closeThingButton");

function escapeThingHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderThingCard(thing, index) {
  const image = thing.image
    ? `<img src="${escapeThingHtml(thing.image)}" alt="${escapeThingHtml(thing.imageAlt || thing.title)}">`
    : `<span class="thing-placeholder" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>`;

  return `
    <button class="thing-card" type="button" data-thing-index="${index}" style="--item-index: ${index}">
      ${image}
      <span>${escapeThingHtml(thing.title)}</span>
    </button>
  `;
}

function openThing(index) {
  const thing = things[index];
  if (!thing) {
    return;
  }

  thingModalImage.hidden = !thing.image;
  thingModalImage.src = thing.image || "";
  thingModalImage.alt = thing.imageAlt || thing.title;
  thingModalTitle.textContent = thing.title;
  thingModalText.textContent = thing.text || "Explicación pendiente.";
  thingOverlay.hidden = false;
  closeThingButton.focus();
}

function closeThing() {
  thingOverlay.hidden = true;
}

if (thingsGrid) {
  thingsGrid.innerHTML = things.map(renderThingCard).join("");
  thingsGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".thing-card");
    if (!card) {
      return;
    }

    openThing(Number(card.dataset.thingIndex));
  });
}

if (closeThingButton) {
  closeThingButton.addEventListener("click", closeThing);
}

if (thingOverlay) {
  thingOverlay.addEventListener("click", (event) => {
    if (event.target === thingOverlay) {
      closeThing();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && thingOverlay && !thingOverlay.hidden) {
    closeThing();
  }
});
