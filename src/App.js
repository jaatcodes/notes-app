import { useEffect, useState } from "react";
import NotesList from "./componenets/NotesList";
import { nanoid } from "nanoid";
import AddNotes from "./componenets/AddNotes";
import Search from "./componenets/Search";
import Header from "./componenets/Header";

const App = () => {
    const [notes, setNotes] = useState([
        {
            text: "This is how a note will look",
            date: "Date Goes here",
            id: nanoid(),
        },
    ]);
    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    // retrive notes from loacal storage when app loads
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);
    // to save to local storage
    useEffect(() => {
        localStorage.setItem("notes-app-data", JSON.stringify(notes));
    }, [notes]);

    // handle functions
    const addNote = (text) => {
        console.log(text);
        const date = new Date();
        const newNote = {
            text,
            id: nanoid(),
            date: date.toLocaleDateString(),
        };
        const updatedNotes = [newNote, ...notes];
        setNotes(updatedNotes);
    };

    const deleteNote = (id) => {
        const updatedNote = notes.filter((note) => note.id !== id);
        setNotes(updatedNote);
    };
    return (
        <div className={`${darkMode && "dark-mode"}  `}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <AddNotes handleAddNote={addNote} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText),
                    )}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};

export default App;
