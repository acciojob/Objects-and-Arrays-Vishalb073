const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
team = players  # Assigning reference of players array to team variable


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
team1 = players.copy()  # Creating a copy of players array and assigning it to team1 variable

cap1 = person.copy()
