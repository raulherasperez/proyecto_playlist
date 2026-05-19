const memories = [
  {
    date: "2025-12-10",
    title: "El principio de todo",
    text: "'y ni con esas nos libramos de Murcia', el mensaje que lo empezó todo. Le debemos una visita. ",
    image: "assets/meme_murcia.jpeg",
    imageAlt: ""
  },
  {
    date: "2025-12-21",
    title: "Objetivo asegurado",
    text: "El día del metro, en el que esperaste hasta las tantas a que llegara a casa medio borracho y empapado entero para irte a dormir. El día que te dí mi número, para qué, como tú misma dijiste 'El objetivo estuviera en Whatsapp'.",
    image: "",
    imageAlt: ""
  },
  {
    date: "2026-01-20",
    title: "La primera cita",
    text: "La primera vez que nos vimos, ese día en el Córner en el que por fin puede ver esos ojos brillantes en persona, aunque me diera vergüenza, pude abrazarte, besarte...y bueno, perder al billar.",
    image: "assets/primera_cita.jpeg",
    imageAlt: ""
  },
  {
    date: "2026-01-26",
    title: "El día del Lagoh",
    text: "El día en el me volviste a ganar al billar, con ese pedazo de outfit. El día en el que nos hartamos a cerveza y nos hicimos las fotos más bonitas que tengo. El día en el que tuve coraje para decirte 'Te quiero' por primera vez.",
    image: "assets/fotos_lagoh.jpeg",
    imageAlt: ""
  },
  {
    date: "2026-02-28",
    title: "La mayor prueba de amor",
    text: "Ojalá no tener que recordarlo, pero esa maldita noche en la que tuviste que venir a mi casa a romper el bucle en el que estaba, aun siendo las tantas de la madrugada, aun sacrificando tu necesitado descanso. Nunca olvidaré lo que hiciste por mí esa noche.",
    image: "",
    imageAlt: ""
  },
  {
    date: "2026-03-24",
    title: "La (no) pedida.",
    text: "Aquel día en el que el calor y la cerveza nos hizo perder la noción del tiempo, tiempo que me faltó para pedirte formalmente ser mi novia. Bueno, a nuestra manera, hubieras dicho que sí. Nuestro aniversario oficial.",
    image: "",
    imageAlt: ""
  }
];

const memoriesList = document.querySelector("#memoriesList");
const dateFormatter = new Intl.DateTimeFormat("es", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return dateFormatter.format(date);
}

function renderMemory(memory, index) {
  const imageFit = memory.imageFit === "cover" ? "cover" : "contain";
  const image = memory.image
    ? `<img class="memory-image ${imageFit}" src="${escapeHtml(memory.image)}" alt="${escapeHtml(memory.imageAlt || memory.title)}">`
    : "";

  return `
    <article class="memory-card" style="--item-index: ${index}">
      <div class="memory-date">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <time datetime="${escapeHtml(memory.date)}">${escapeHtml(formatDate(memory.date))}</time>
      </div>
      ${image}
      <div class="memory-body">
        <h2>${escapeHtml(memory.title)}</h2>
        <p>${escapeHtml(memory.text)}</p>
      </div>
    </article>
  `;
}

const sortedMemories = [...memories].sort((a, b) => a.date.localeCompare(b.date));
memoriesList.innerHTML = sortedMemories.map(renderMemory).join("");
