import { useContext } from 'react';
import { CommentContext } from '../Context';
import Comment from './Comment';
import './Comments.css';

/* Renders the comment list in the web page. */
const Comments = ({ nestedComments }) => {
    const { comments } = useContext(CommentContext);

    const commentItems = (nestedComments ? nestedComments : comments).map(comment => {
        return <Comment key={comment.id} commentInfo={comment} isRootComment={!nestedComments}></Comment>
    });

    return (
        <ul className={'comments'}>
            {commentItems}
        </ul>
    )
}

export default Comments;