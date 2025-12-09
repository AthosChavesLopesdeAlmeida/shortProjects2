function getRandomIndex() {
  const pokemons = [
  "pikachu", "charizard", "blastoise", "venusaur", "mewtwo",
  "mew", "snorlax", "gengar", "dragonite", "alakazam",
  "machamp", "lapras", "arcanine", "gyarados", "eevee",
  "lugia", "ho-oh", "tyranitar", "entei", "suicune",
  "raikou", "ampharos", "scizor", "heracross", "houndoom",
  "feraligatr", "meganium", "typhlosion", "umbreon", "espeon",
  "rayquaza", "kyogre", "groudon", "metagross", "salamence",
  "blaziken", "sceptile", "swampert", "gardevoir", "aggron",
  "flygon", "milotic", "absol", "latios", "latias",
  "arceus", "dialga", "palkia", "giratina", "darkrai",
  "garchomp", "lucario", "infernape", "empoleon", "torterra",
  "weavile", "luxray", "roserade", "spiritomb", "regigigas",
  "reshiram", "zekrom", "kyurem", "hydreigon", "volcarona",
  "chandelure", "haxorus", "samurott", "serperior", "emboar",
  "xerneas", "yveltal", "zygarde", "greninja", "delphox",
  "chesnaught", "talonflame", "aegislash", "goodra", "noivern",
  "solgaleo", "lunala", "necrozma", "lycanroc", "incineroar",
  "primarina", "decidueye", "kommo-o", "mimikyu", "tapu-koko",
  "zacian", "zamazenta", "eternatus", "tyranitar", "dragapult",
  "ceruledge", "armarouge", "koraidon", "miraidon", "chien-pao"
];

  const random = Math.floor(Math.random() * pokemons.length);
  return pokemons[random];
}


export async function returnPokemon() {
  const chosen = getRandomIndex()

  const url = `https://pokeapi.co/api/v2/pokemon/${chosen}`;
  const response = await fetch(url);
  const data = await response.json();
  
  return {
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default
  }
};