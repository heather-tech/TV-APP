import React, { useState } from 'react';


const Idea = ({ idea, deleteIdea, editIdea }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(idea.title);
  const [description, setDescription] = useState(idea.description);

  const handleEdit = (e) => {
    e.preventDefault();
    editIdea(idea.id, { title, description });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </li>
    );
  }

  return (
    <li>
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <button onClick={() => deleteIdea(idea.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
};

export default Idea;
