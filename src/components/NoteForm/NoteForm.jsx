import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(content);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">➤</button>
        </form>
    );
};

export default NoteForm;
