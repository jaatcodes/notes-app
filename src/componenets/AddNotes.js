import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const charLimit = 500;

    const handleChange = (e) => {
        if (charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    };
    return (
        <div className='note new'>
            <textarea
                cols='10'
                rows='8'
                placeholder='Type to add a new note'
                value={noteText}
                onChange={handleChange}></textarea>

            <div className='note-footer'>
                <small>{charLimit - noteText.length} left</small>
                <button className='save' onClick={handleSaveClick}>
                    save
                </button>
            </div>
        </div>
    );
};

export default AddNotes;
