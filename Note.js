let noteInput = document.querySelector("#noteInput")
let notesContainer = document.querySelector("#notesContainer")

function addNote(){
      let text = noteInput.value.trim();
      if(text==""){
            return;
      }
      createNote(text);
      noteInput.value =""
      saveNote()

}

function createNote(text){
      let div = document.createElement("div")
      div.classList.add("notes")
      div.innerHTML = `<span class="delete" onclick = deleteNote(this)>x</span><p>${text}</p>`
      notesContainer.appendChild(div)
}

function deleteNote(element){
    element.parentElement.remove()
    saveNote()
}

function saveNote(){
      let notes = []
      let text = document.querySelectorAll(".notes-container p")
      text.forEach(note=>{
            notes.push(note.innerText)
      })
      localStorage.setItem("notes",JSON.stringify(notes))
      console.log(notes)
}

function loadNotes(){
      let note =JSON.parse(localStorage.getItem("notes")) || []
      note.forEach(note=>{
            createNote(note)
      })
}

loadNotes()
