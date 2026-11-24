
const notes = [];

function saveNote(content, id) {
  notes.push({
    content: content,
    id: id
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
