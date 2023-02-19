//Create a array to store our messages
let message = ["What a Wonderful World", "La Vie en Rose", "On the Sunny Side of the Street", "Dream a Little Dream of Me", "When You\'re Smiling"];

//A function to generate a random message

const messageGenerator = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

console.log(messageGenerator(message));