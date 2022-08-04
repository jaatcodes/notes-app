import React from "react";
import { MdDeleteForever } from "react-icons/md";
import NotesList from "./NotesList";

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span> {text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever
                    size='1.3em'
                    className='delete-icon'
                    onClick={() => handleDeleteNote(id)}
                />
            </div>
        </div>
    );
};

Note.defaultProps = {
    text: "This is a Note",
    date: "01/01/22",
};

export default Note;
