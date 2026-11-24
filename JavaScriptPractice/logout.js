
const notes = [
  { content: "Pick up groceries", id: 1 },
  { content: "Do laundry", id: 2 }
];

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();
