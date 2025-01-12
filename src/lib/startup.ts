import { IIncentivo } from "./incentivo";

export interface IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];

  riceviIncentivo(incentivo: IIncentivo): void;
}

export class Startup implements IStartup {
  constructor(
    public nome: IStartup["nome"],
    public settoreFocus: IStartup["settoreFocus"],
    public descrizione: IStartup["descrizione"],
    public prodottiServizi: IStartup["prodottiServizi"]
  ) {}

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `La startup ${this.nome} ha ricevuto l'incentivo ${incentivo.codiceIdentificativo}`
    );
  }
}
