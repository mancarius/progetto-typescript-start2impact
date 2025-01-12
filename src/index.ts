import { Cittadino } from "./lib/cittadino";
import { Incentivo } from "./lib/incentivo";
import { Startup } from "./lib/startup";

// Creazione delle startup innovative

const wearableTech = new Startup(
  "WearableTech",
  "wearable",
  "Sviluppo di dispositivi indossabili per il monitoraggio dell'attività fisica",
  ["SmartBand", "Sensori biometrici", "App di tracking"]
);

const fitnessLab = new Startup(
  "FitnessLab",
  "fitness",
  "Centro fitness innovativo con programmi personalizzati",
  ["Personal training", "Corsi di gruppo", "Consulenza nutrizionale"]
);

// Creazione degli incentivi

const incentivo2023 = new Incentivo(
  "INC2023-001",
  "Incentivo per startup innovative nel settore sportivo",
  50000,
  ["Settore sportivo", "Meno di 5 anni di attività", "Prodotti innovativi"]
);

const bonusSport = new Incentivo(
  "BSPORT-2023",
  "Bonus per promozione attività fisica",
  25000,
  ["Promozione sport", "Impatto sociale positivo"]
);

// Creazione dei cittadini

const cittadino1 = new Cittadino("Mario", "Rossi", 35, [
  "Fitness",
  "Running",
  "Tecnologia sportiva",
]);

const cittadino2 = new Cittadino("Laura", "Bianchi", 28, [
  "Yoga",
  "Nuoto",
  "Wearable tech",
]);

// Test della logica di assegnazione e partecipazione

incentivo2023.assegnaAStartup(wearableTech);
bonusSport.assegnaAStartup(fitnessLab);

cittadino1.partecipaAttivita(fitnessLab);
cittadino2.partecipaAttivita(wearableTech);
