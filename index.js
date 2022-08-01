const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const guests = ["Heather", "Kimberly", "Allison", "Alexis", "Arlene"]; 
const event = "birthday"

function writeCards(guests, event) {
const newArray = [] 
  for (let i = 0; i < guests.length; i++) {
  newArray.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;  
}

writeCards(guests, "birthday")

let number = 15
function countDown(number) {
  while (number >= 0){
    console.log(number--)
  }
}
