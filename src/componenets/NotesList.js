import React from "react";
import Note from "./Note";

const NotesList = ({ notes, handleDeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    );
};

export default NotesList;
