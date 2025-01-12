import { IStartup } from "./startup";

export interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string[];

  assegnaAStartup(startup: IStartup): void;
}

export class Incentivo implements IIncentivo {
  constructor(
    public codiceIdentificativo: IIncentivo["codiceIdentificativo"],
    public descrizione: IIncentivo["descrizione"],
    public valore: IIncentivo["valore"],
    public criteriEleggibilita: IIncentivo["criteriEleggibilita"]
  ) {}

  assegnaAStartup(startup: IStartup): void {
    console.log(
      `Incentivo ${this.codiceIdentificativo} assegnato alla startup ${startup.nome}`
    );
    startup.riceviIncentivo(this);
  }
}
