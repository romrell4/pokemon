var currentMapName = "";

function getMap(mapName) {
	return maps[mapName];
}

function getCurrentMapName() {
	return currentMapName;
}

function setCurrentMap(mapName) {
	currentMapName = mapName;
}

function getCurrentMap() {
	return maps[currentMapName];
}

function getAllMapNames() {
	return Object.keys(maps);
}

function getLinkingLocation(mapName, location) {
	console.log(mapName);
	console.log(location);
	console.log(mapLinks);
	var result = mapLinks[mapName][location.row + "-" + location.col];
	return {mapName: result.mapName, location: {row: result.location.row, col: result.location.col}}
}

var mapLinks = {
	"PalletTown": {
		"0-10": {
			mapName: "Route1",
			location: {
				row: 35,
				col: 7
			}
		},
		"0-11": {
			mapName: "Route1",
			location: {
				row: 35,
				col: 8
			}
		},
		"17-4": {
		
		},
		"17-5": {
			
		},
		"17-6": {
			
		},
		"17-7": {
			
		}
	},
	"Route1": {
		"35-7": {
			mapName: "PalletTown",
			location: {
				row: 0,
				col: 10
			}
		},
		"35-8": {
			mapName: "PalletTown",
			location: {
				row: 0,
				col: 11
			}
		}
	}
}

maps = {
	PalletTown: [
		['groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingGreenTall00', 'buildingGreenTall01', 'buildingGreenTall01', 'buildingGreenTall03', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenTall00', 'buildingGreenTall01', 'buildingGreenTall01', 'buildingGreenTall03', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingGreenTall10', 'buildingGreenTall11', 'buildingGreenTall12', 'buildingGreenTall13', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'buildingGreenTall10', 'buildingGreenTall11', 'buildingGreenTall12', 'buildingGreenTall13', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'signWhite', 'buildingGreenTall20', 'door', 'buildingGreenTall22', 'buildingGreenTall23', 'groundWhite', 'groundWhite', 'groundYellow', 'signWhite', 'buildingGreenTall20', 'door', 'buildingGreenTall22', 'buildingGreenTall23', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall22', 'buildingBrickTall23', 'buildingBrickTall24', 'buildingBrickTall25', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingBrickTall30', 'buildingBrickTall31', 'door', 'buildingBrickTall33', 'buildingBrickTall31', 'buildingBrickTall35', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'fence', 'fence', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterTopLeft', 'waterTop', 'waterTop', 'waterTopRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'waterLeft', 'water', 'water', 'waterRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier']
	],
	Route1: [
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'groundYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'groundYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'groundYellow', 'groundYellow', 'groundYellow', 'signYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree']
	],
	VeridianCity: [
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree']
	]
}

