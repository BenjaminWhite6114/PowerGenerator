//Everything here gets run every time the page loads
document.getElementById("output").innerHTML = "Javascript was loaded, but didn't output";

//ARRAYS
//specific target types
const animals = ["any animal", "any bug", "any domesticated animals", "any aquatic animals", "any animal which can fly", "people", "cats", "dogs", "rats", "spiders", "flies", "horses", 
"cows", "bats", "snakes", "worms", "beetles", "birds", "fish", "whales","eels", "lizards", "chickens", "possums", "raccoons", "frogs", "turtles"];
const plants = ["any plant", "any herb", "any edible plant", "trees", "flowers", "cacti", "vines", "ferns", "grasses", "bushes", "mushrooms", "mosses"];
const bodyParts = ["any body part", "head", "body", "arms", "legs", "hands", "feet", "eyes", "mouth", "nose", "ears", "teeth", "skin", "hair", "knuckles", "elbows", "knees", "fingers", 
"toes", "neck"];
const materials = ["anything", "stone", "clay", "metal", "sand", "wood", "plastic", "rubber", "cement", "cotton", "cloth", "steal", "brass", "bronze", "paper", "glass", "diamond", "meat"];
const chemicals = ["hydrogen", "helium", "carbon", "nitrogen", "oxygen", "flourine", "neon", "sodium", "magnesium", "aluminium", "silicon", "sulfur", "chlorine", "argon", "potassium", 
"calcium", "titanium", "magnesium", "iron", "cobalt", "nickle", "copper", "zinc", "silver", "tin", "iodine", "xenon", "cesium", "tungsten", "osmium", "iridium", "platinum", "gold", 
"mercury", "lead", "francium", "neodymium", "thorium", "uranium", "plutonium", "hassium", "meitnerium", "carbon dioxide", "hydrogen peroxide", "ammonia", "hydrocloric acid", "sulfuric acid", 
"nitroglycerin", "methane", "bleach", "water"];
const energies = ["heat", "sound", "light", "fire", "frost", "electricity", "magnetic energy", "gravitational energy", "life energy"];
//target type groups
const physicalTargets = [animals, plants, bodyParts, materials, chemicals];
const livingTargets = [animals, plants];
const organicTargets = [animals, plants, bodyParts];
const allTargets = [animals, plants, bodyParts, materials, chemicals, energies];
//FUNCTIONS
//select random item from an Array
const randomIndex = (array) =>{
	return array[Math.floor(Math.random * array.length)];
}
//generate a random target. target(matrix of target types that are acceptable)
function target(type){
	const targetGroup = randomIndex(type);
	return randomIndex(targetGroup);
}

//SET OUTPUT LINE OF HTML
document.getElementById("output").innerHTML = target(allTargets);