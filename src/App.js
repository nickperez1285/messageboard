import './App.css';
import Blog from './components/Blog';
import Comments from './components/Comments';
import CommentDetails from './components/CommentDetails';
import { CommentContext, defaultComments } from './Context';
import { useState } from 'react';

function App() {
  const [comments, setComments] = useState(defaultComments);

  // Update new comments in the context storage.
  const updateComments = (comment, parentId) => {
    if (!parentId) {
      setComments([...comments, getCommentInfo(comment)])
    }
    else {
      updateNestedComments(comments, comment, parentId);
    }
  }

  // Updating nested comments based on the parent id.
  const updateNestedComments = (comments, comment, parentId) => {
    let parent = comments.find(item => item.id === parentId);
    if (parent) {
      parent.children = parent.children ? parent.children : [];
      parent.children = [...parent.children, getCommentInfo(comment)];
    }
    else {
      comments.forEach(item => {
        if (item.children) {
          updateNestedComments(item.children, comment, parentId);
        }
      });
    }
  }

  return (
    <div className="App">
      <Blog></Blog>
      <CommentContext.Provider value={{ comments, updateComments }}>
        <CommentDetails></CommentDetails>
        <Comments></Comments>
      </CommentContext.Provider>
    </div>
  );
}

// Creates a new comment object to store in the context.
const getCommentInfo = (comment) => {
  let randomId = Math.floor(Math.random() * 10000);
  return {
    id: randomId,
    userName: 'usx' + randomId,
    comment: comment,
    time: getDateFormat()
  }
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// Formating the date object and returns a custom formatted result.
const getDateFormat = () => {
  let dateString = '';
  let date = new Date();
  let month = months[date.getMonth()];
  let hour = date.getHours();
  let session = hour > 12 ? 'pm' : 'am';
  hour = hour % 12;
  let minute = date.getMinutes();
  dateString = month + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + hour + ':' + minute + ' ' + session;
  return dateString;
}

export default App;
