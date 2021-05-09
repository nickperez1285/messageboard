import { useState } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faUser } from '@fortawesome/free-solid-svg-icons'
import './Comment.css';

/* Renders the threaded comments and new comments */
const Comment = ({ commentInfo, isRootComment }) => {
    const [showReply, setReply] = useState(false);

    return (
        <li className={isRootComment ? 'comment-item' : 'comment-item nested'}>
            <article className={commentInfo.children ? 'has-child' : ''}>
                <header>
                    <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span>
                    <span className='user-name'>{commentInfo.userName}</span>
                    <span className='log-time'>{commentInfo.time}</span>
                </header>
                <div className="comment">
                    <p>{commentInfo.comment}</p>
                </div>
                <footer>
                    <span className='reply-icon'><FontAwesomeIcon icon={faReply} /></span>
                    <span className='reply' onClick={() => setReply(true)}>Reply</span>
                </footer>
                {showReply && <NewComment onCancel={() => setReply(false)} parentId={commentInfo.id}></NewComment>}
            </article>
            {commentInfo.children && <Comments nestedComments={commentInfo.children}></Comments>}
        </li>
    )
}

export default Comment;