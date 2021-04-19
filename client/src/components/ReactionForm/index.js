import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ storyId }) => {

    const [addReaction, { error }] = useMutation(ADD_REACTION)

    const [reactionBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = event => {
    if (event.target.value.length <= 280) {
        setBody(event.target.value);
        setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add reaction to database
            await addReaction({
                variables: { reactionBody, storyId }
            });
        
            // clear form value 
            setBody('');
            setCharacterCount(0);
        } catch (e) {
                console.error(e);
        }
       
    };

  return (
    <div>
      <form className="flex-row" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Leave a reaction to this story..."
          value={reactionBody}
          className="reaction-form story-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <div className="col-12">
        <p className={`m-0 body-text ${characterCount === 280 || error ? 'text-error' : ''}`}>
          Character Count: {characterCount}/280
          {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        </div>
        <button className="story-button btn btn-outline-success btn-lg col-2 m-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactionForm;