// Code your selectRandomEntry function here:
let selectRandomEntry = function (ids) { 
  let index = Math.floor(Math.random() * ids.length)
  return ids[index]
}
function selectThree(ids) {
  let randomThree = [];
  for (let i = 0; i < 3; i++) {
    let id = selectRandomEntry(ids)
  }
  while(randomThree.includes(id)) {
    id = selectRandomEntry(ids);
  }
  randomThree.push(id);
}

// Code your buildCrewArray function here:
let randomIdNumbers = selectThree(idNumbers);
function buildCrew(idNumber, candidates) {
  let crew = [];
  for (let i = 0; i < candidates.length; i++) {
    if (idNumbers.includes(candidates[i].astronautID))
    crew.push(candidates[i])
  }
  return crew
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
