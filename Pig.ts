export class Pig {
  name: string;
  breed: string;
  height: number;
  weight: number;
  personality: string;
  category: string;
  ability: string | number;

  constructor(
      name: string, 
      breed: string, 
      height: number, 
      weight: number, 
      personality: string, 
      category: string, 
      ability: string | number
    ) {
    this.name = name;
    this.category = category;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.personality = personality;
    this.ability = ability;
  }
}
  