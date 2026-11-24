
const notes = [
  { content: "Pick up groceries", id: 1 },
  { content: "Do laundry", id: 2 }
];

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: Please provide a valid number.");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);
