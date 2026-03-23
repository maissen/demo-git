const greet = (name = "stranger") => {
  console.log("greeting user...");
  return `Hello ${name}`;
}

const farewell = (name) => `See you soon, ${name}!`;
