export type Digimon = {
  href: string;
  id: number;
  image: string;
  name: string;

  level: DigimonStats["level"];
  attribute: DigimonStats["attribute"];
}

export type DigimonStats = {
  level: string;
  attribute: string;
}