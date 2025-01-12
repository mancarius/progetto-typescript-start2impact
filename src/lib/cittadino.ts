import { IStartup } from "./startup";

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  partecipaAttivita(startup: IStartup): void;
}

export class Cittadino implements ICittadino {
  constructor(
    public nome: ICittadino["nome"],
    public cognome: ICittadino["cognome"],
    public eta: ICittadino["eta"],
    public interessiSportivi: ICittadino["interessiSportivi"]
  ) {}

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `${this.nome} ${this.cognome} sta partecipando alle attività di ${startup.nome}`
    );
  }
}
