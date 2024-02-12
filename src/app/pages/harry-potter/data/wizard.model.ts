export interface IWizard {
  id: number;
  firstName: string | null;
  lastName: string;
  elixirs: IElixir[];
  ingredients: IIngredient[];
  imageUrl: string;
}

export interface IElixir {
  id: number;
  name: string;
  effect: string;
  characteristics: string;
  time: string;
  difficulty: string;
  ingredients: IIngredient[];
  manufacturer: string;
}

export interface IIngredient {
  id: number;
  name: string;
  description: string;
}
