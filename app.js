const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

addBtn.addEventListener("click",
    function(){
        addNote()
    }
)

const savenote = () =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
    if(data.length === 0){
        localStorage.removeItem("notes")
    } else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}

const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash-alt"></i>
 </div>
 <textarea >${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener( "click",
    function(){
        note.remove()
        savenote()
    }
)
note.querySelector(".save").addEventListener(
    "click",
    function(){
        savenote()
    }
)
    note.querySelector("textarea").addEventListener(
        "focus",
        function(){
            savenote()
        }
    )
    main.appendChild(note);
    savenote()
}

(
    function() {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes === null){
            addNote()
        } else{
        lsnotes.forEach(
            (lsnotes) => {
                addNote(lsnotes)
            }
        )
       }
    }
)()