//Everything here gets run every time the page loads
document.getElementById("output").innerHTML = "Javascript loaded, but did not output. I have no idea what you did wrong.";

//ARRAYS
document.getElementById("output").innerHTML = "You fucked up the arrays again";
//specific target types DO NOT EDIT ELEMENT 0 adding new target types will require additions to the target function
const animals = ["any animal", "any bug", "any domesticated animals", "any aquatic animals", "any animal which can fly", "people", "cats", "dogs", "rats", "spiders", "flies", "horses", 
"cows", "bats", "snakes", "worms", "beetles", "birds", "fish", "whales","eels", "lizards", "chickens", "possums", "raccoons", "frogs", "turtles"];
const plants = ["any plant", "any herb", "any edible plant", "trees", "flowers", "cacti", "vines", "ferns", "grasses", "bushes", "mushrooms", "mosses"];
const bodyParts = ["any body part", "heads", "bodys", "arms", "legs", "hands", "feet", "eyes", "mouths", "noses", "ears", "teeth", "skin", "hair", "knuckles", "elbows", "knees", "fingers", 
"toes", "necks"];
const materials = ["anything", "stone", "clay", "metal", "sand", "wood", "plastic", "rubber", "cement", "cotton", "cloth", "steal", "brass", "bronze", "paper", "glass", "diamond", "crystal", "meat"];
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
//shapes
const shapes = ["spheres", "cubes", "pyramids", "needles", "ropes", "ribbons", "cylinders"];
//properties
const physicalProperties = ["slippery", "sticky", "bouncy", "brittle", "indestructible", "burning", "toxic", "freezing", "glowing", "ordinary"];
const characterProperties = ["intelligence", "strength", "flexibility", "durability", "constitution", "regeneration"];
const propertyTypes = [physicalProperties, characterProperties];


//SUPPORT FUNCTIONS
document.getElementById("output").innerHTML = "Looks like somethings wrong with the support functions";
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
	//find the name of the "type" string. This seems harder than it should be, but I can find no better way
	if (finalTarget.type[0] === "any animal") {
		finalTarget.typeName = "animals";
	} else if (finalTarget.type[0] === "any plant") {
		finalTarget.typeName = "plants";
	} else if (finalTarget.type[0] === "any body part") {
		finalTarget.typeName = "bodyParts";
	} else if (finalTarget.type[0] === "anything") {
		finalTarget.typeName = "materials";
	} else if (finalTarget.type[0] === "hydrogen") {
		finalTarget.typeName = "chemicals";
	} else if (finalTarget.type[0] === "heat") {
		finalTarget.typeName = "energies";
	} else {
		finalTarget.typeName = "type name unkown";
    }
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
//generate a random shape
shape = () => {
	const shapeObject = {
		output: "shape's output property never changed",
		test: "properties are accessible"
	}
	shapeObject.shape = randomIndex(shapes);
	shapeObject.property = randomIndex(physcialProperties);
	shapeObject.material = randomIndex(materials);
	shapeObject.output = shapeObject.property + " " + shapeObject.shape + " made of " + shapeObject.material;
	return shapeObject;
}
//I hate that I need this. adds the word "enhanced" to a character property
enhance = () => {
	return "enhanced " + randomIndex(characterProperties);
}

//POWER FUNCTIONS
document.getElementById("output").innerHTML = "looks like somethings wrong with the power functions";
sense = () => {
	const power = {
		output: "power's output property never changed (sense)"
	}
	power.targetObject = target(allTargets);
	power.target = power.targetObject.target;
	power.range = range();
	power.output = "You can sense " + power.target + " " + power.range;
	return power;
}
imbue = () => {
	const power = {
		output: "power's output property never changed (imbue)"
	}
	power.targetObject = target(physicalTargets);
	power.target = power.targetObject.target;
	power.range = range();
	if (power.targetObject.typeName === "animals" || power.targetObject.typeName === "plants") {
		power.propertyType = randomIndex(physicalProperties);
		if (power.propertyType[0] === "intelligence") {
			power.property = enhance();
			power.output = "you can " + power.property + " " + power.target + " " + power.range;
		} else {
			power.property = randomIndex(physicalProperties);
			power.output = "you can cause " + power.target + " " + power.range + " to become " + power.property;
        }
	} else {
		power.propertyType = physicalProperties;
		power.property = randomIndex(power.propertyType);
		power.output = "you can cause " + power.target + " " + power.range + " to become " + power.property;
	}
	
	return power;
}
emit = () => {
	const power = {
		out: "power's output property never changed (emit)"
    }
}


//SET OUTPUT LINE OF HTML
document.getElementById("output").innerHTML = "something's wrong with what you tried to output";
document.getElementById("output").innerHTML = imbue().output;