//Everything here gets run every time the page loads
document.getElementById("output").innerHTML = "Javascript was loaded, but didn't output";

//ARRAYS
//specific target types
const animals = ["any animal", "any bug", "any domesticated animals", "any aquatic animals", "any animal which can fly", "people", "cats", "dogs", "rats", "spiders", "flies", "horses", 
"cows", "bats", "snakes", "worms", "beetles", "birds", "fish", "whales","eels", "lizards", "chickens", "possums", "raccoons", "frogs", "turtles"];
const plants = ["any plant", "any herb", "any edible plant", "trees", "flowers", "cacti", "vines", "ferns", "grasses", "bushes", "mushrooms", "mosses"];
const bodyParts = ["any body part", "heads", "bodys", "arms", "legs", "hands", "feet", "eyes", "mouths", "noses", "ears", "teeth", "skin", "hair", "knuckles", "elbows", "knees", "fingers", 
"toes", "necks"];
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
//ranges
const ranges = ["distance", "exist inside or as a part of you", "you are touching", "you can see", "you can hear", "you can taste"];
const distances = ["milimeters", "cenitimeters", "inches", "feet", "meters", "kilometers", "miles"];


//SUPPORT FUNCTIONS
//select random item from an Array
const randomIndex = (array) =>{
	return array[Math.floor(Math.random() * array.length)];
}
//generate a random target. target(matrix of target types that are acceptable)
const target = (type) => {
	const finalTarget = {
		target: "target property was never set"
	}
	finalTarget.type = randomIndex(type);
	finalTarget.target = randomIndex(finalTarget.type);
	return finalTarget;
}
//generate a random distance
range = () => {
	const tempRange = randomIndex(ranges);
	if(tempRange === "distance"){
		return "within " + Math.floor(Math.random() * 100) +  " " + randomIndex(distances);
	}else{
		return "that " + tempRange;
	}
}


//POWER FUNCTIONS
sense = () => {
	const power = {
		output: "power's output property never changed"
	}
	power.targetObject = target(allTargets);
	power.target = power.targetObject.target;
	power.targetType = power.targetObject.type;
	power.range = range();
	power.output = "You can sense " + power.target + " " + power.range;
	return power;
}
imbue = () => {
	const power = {
		output: "power's output property never changed"
	}
	
	return power;
}

//SET OUTPUT LINE OF HTML
document.getElementById("output").innerHTML = sense().output;