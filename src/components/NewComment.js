import { useContext, useState } from 'react';
import { CommentContext } from '../Context';

import './NewComment.css';

/* Crate a new form component inside the comments and threaded comments */
const NewComment = ({ onCancel, isNewComment, parentId }) => {
    const { updateComments } = useContext(CommentContext);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        updateComments(newComment, !isNewComment ? parentId : null);
        setNewComment('');
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea className="form-control" value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{ height: '250px' }}></textarea>
            </div>
            <div className="form-group submit-btns">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-light" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default NewComment;