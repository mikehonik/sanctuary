/* ============================================================
   THE SANCTUARY — Configuración
   Este archivo lo genera el panel de administración (admin.html).
   No hace falta editarlo a mano: ábrelo desde el panel, haz los
   cambios y descarga la versión nueva.
   ============================================================ */

window.SANCTUARY_CONFIG = {

  /* ---- Acceso ---- */
  clave: "isabella",              // clave que reciben los invitados
  claveAdmin: "mike2026",         // clave del panel de administración
  whatsapp: "584120000000",       // tu número, con código de país, sin + ni espacios

  /* ---- Tarifas ---- */
  precioPorNoche: 250,
  minimoNoches: 2,
  maxAdultos: 8,
  maxNinos: 6,

  /* Precios especiales por fecha (feriados, temporada alta).
     Formato: "AAAA-MM-DD": precio  */
  preciosEspeciales: {
    "2026-12-24": 400,
    "2026-12-25": 400,
    "2026-12-31": 450,
    "2027-01-01": 450
  },

  /* Fechas ya reservadas o bloqueadas. Formato: "AAAA-MM-DD" */
  fechasBloqueadas: [
    "2026-08-10", "2026-08-11",
    "2026-08-17", "2026-08-18",
    "2026-08-24", "2026-08-25"
  ],

  /* ---- Fotos ---- */
  fotos: {
    piscina: "img/piscina.jpg",
    playa:   "img/playa.jpg",
    masaje:  "img/masaje.jpg"
  },

  /* ---- Menú ---- */
  menu: {
    desayuno: [
      { nombre: "Cachapa Dorada con Queso de Mano Ahumado", desc: "Maíz tierno, queso artesanal local, mantequilla de hierbas", sello: "firma" },
      { nombre: "Empanada Negra de Mariscos del Día", desc: "Masa de tinta de calamar, camarones, alioli de ají dulce", sello: "" },
      { nombre: "Empanada de Pabellón Criollo", desc: "Carne mechada, caraotas, tajadas, queso blanco", sello: "" },
      { nombre: "Tabla de Quesos Venezolanos & Frutas Tropicales", desc: "Queso de mano, telita, palmita con mango, parchita y papaya", sello: "local" },
      { nombre: "Agua de Coco Fría con Jengibre", desc: "Directamente de la palmera, servida en su cáscara", sello: "firma" },
      { nombre: "Huevos Benedictinos Criollos", desc: "Pan artesanal, pernil confitado, holandesa de pimentón asado", sello: "" }
    ],
    almuerzo: [
      { nombre: "Pargo Entero a la Parrilla de Leña", desc: "Hierbas frescas, limón negro, mantequilla de ajo y azafrán", sello: "chef" },
      { nombre: "Ceviche Imperial de Camarones Tigre", desc: "Leche de tigre con ají amarillo, crocante de plátano, aguacate criollo", sello: "" },
      { nombre: "Tiradito de Pargo con Leche de Coco", desc: "Pescado fresco laminado, coco, culantro, ají dulce, lima", sello: "" },
      { nombre: "Langostinos al Ajillo con Tostones de Maíz", desc: "Mantequilla negra, ajo confitado, hierbas del jardín", sello: "" },
      { nombre: "Ensalada de Mar & Tierra", desc: "Pulpo confitado, rúcula, queso artesanal, vinagreta de parchita", sello: "" },
      { nombre: "Mariscos Mixtos a la Plancha", desc: "Selección del día, limón asado, chimichurri de culantro", sello: "" }
    ],
    cena: [
      { nombre: "Langosta Entera a la Leña", desc: "Mantequilla de trufas, limón asado, arroz negro al coco", sello: "premium" },
      { nombre: "Pabellón Criollo Deconstruido", desc: "Carne mechada de 12h, caraotas negras cremosas, plátano brûlée", sello: "firma" },
      { nombre: "Surf & Turf del Caribe", desc: "Lomo de res a la parrilla, cola de langostinos, chimichurri de culantro", sello: "" },
      { nombre: "Pescado del Día al Coco", desc: "Leche de coco, curry suave, arroz aromático, tostones crujientes", sello: "" },
      { nombre: "Camarones al Ajillo Negro", desc: "Ajo confitado, mantequilla de hierbas, tostadas artesanales", sello: "" }
    ],
    snacks: [
      { nombre: "Tabla Venezolana de Quesos Artesanales", desc: "Queso de mano, telita, palmita, mermelada de guayaba, pan de yuca", sello: "local" },
      { nombre: "Cocada Premium de la Casa", desc: "Coco fresco artesanal, ralladura de lima, sal de mar", sello: "firma" },
      { nombre: "Empanadas Surtidas (x6)", desc: "Pabellón, pollo al ajillo, mariscos, queso con jalapeño", sello: "" },
      { nombre: "Guacamole de Aguacate Criollo & Tostones", desc: "Aguacate venezolano, jalapeño, lima, cilantro fresco", sello: "" },
      { nombre: "Ceviche Imperial de Langostinos", desc: "Leche de tigre, ají, aguacate, crocante de yuca", sello: "" }
    ]
  },

  /* ---- Coctelería ---- */
  bebidas: [
    { nombre: "El Santuario", desc: "Ron añejo, agua de coco fresca, jengibre, lima y espuma de parchita. Nuestro signature." },
    { nombre: "Laguna Negra", desc: "Mezcal, mango asado, ají dulce y sal negra. Para los audaces." },
    { nombre: "Coco Brûlée", desc: "Ron blanco, leche de coco caramelizada, vainilla de Chuao, azúcar morena." },
    { nombre: "Margarita del Caribe", desc: "Tequila reposado, maracuyá fresco, triple sec, borde de sal de mar y chile." },
    { nombre: "Palmera Spritz", desc: "Aperol, prosecco, guanábana, albahaca fresca y soda de coco." },
    { nombre: "Sunrise Tropical · Sin alcohol", desc: "Parchita, mango, jengibre, agua de coco y soda natural." }
  ],

  /* ---- Servicio adicional (fuera del all inclusive) ---- */
  masaje: {
    activo: true,
    titulo: "Masaje en la playa",
    desc: "El único servicio fuera del all inclusive. Terapeuta certificada a domicilio — en la terraza, la playa o tu habitación.",
    precio: 80,
    detalle: "60 min · bajo las palmeras"
  }
};
