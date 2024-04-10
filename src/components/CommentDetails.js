import { useState, useContext } from 'react';
import NewComment from './NewComment';
import { CommentContext } from '../Context';
import "./CommentDetails.css";

/* Renders the comment count and initiate a new comment in the discussion */
let CommentDetails = () => {
    const { comments } = useContext(CommentContext);
    const [isNewComment, setNewComment] = useState(false);

    return (
        <section className="comment-details">
            {/* <div className="comment-count"><b>{comments.length} comments</b></div> */}
            <button className="btn btn-primary" onClick={() => setNewComment(true)}>Create New Thread</button>
            {isNewComment && <NewComment onCancel={() => setNewComment(false)} isNewComment={true}></NewComment>}
        </section>
    )
}

export default CommentDetails;