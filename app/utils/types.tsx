export interface Digimon {
  href: string;
  id: number;
  image: string;
  name: string;

  level: DigimonStats["level"];
  attribute: DigimonStats["attribute"];
}

export interface DigimonStats{
  level: string;
  attribute: string;
}