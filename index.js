//Iteration#1
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories = [];
for(let movie of movies) {
      categories.push(...movie.categories);
}
categories = [...new Set(categories)];

console.log(categories)


//Iteration#2
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

function calcMediaOfVoulume(users) {
  let counter = 0;
  let sumOfVolumes = 0;
  for(let user of users) {
     for(let sound in user.favoritesSounds) {
       counter += 1;
       sumOfVolumes += user.favoritesSounds[sound].volume;
     }
  }
  const media = sumOfVolumes / counter;
  return media;
}

console.log(calcMediaOfVoulume(users));

//Iteration#3
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
function countFavorites(userArr) {
  let soundsArr = [];
  for(let user of users) { 
      for(let sound in user.favoritesSounds) {     
          soundsArr.push(sound);
      }
  }

  const soundCount = {};
  soundsArr.forEach((sound) => {
    soundCount[sound] = (soundCount[sound] ?? 0) + 1;
  });
  
  return soundCount;
}

console.log(countFavorites(users));


//Iteration#4
const textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}
console.log(findArrayIndex(textos, 'Caracol'))
console.log(findArrayIndex(textos, 'Mosquito'))
console.log(findArrayIndex(textos, 'Salamandra'))
console.log(findArrayIndex(textos, 'Ajolote'))

//Iteration#5
function rollDice(caras) {
    let numeroCaras = caras + 1;
    let randomNumber = parseInt(Math.random() * (numeroCaras - 1) + 1);

    return randomNumber;
}

console.log(rollDice(5));

//Iteration#6
const swapArr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(array, index1, index2) {
    let arrayClone = [...array];
    
    arrayClone[index1] = array[index2];
    arrayClone[index2] = array[index1];
    
    return arrayClone;
}

console.log(swap(swapArr, 0, 1));