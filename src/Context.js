import React from 'react';

// Context storage for comments.
const CommentContext = React.createContext({
    comments: [],
    updateComments: () => {}
});

// Default comments loaded at initial rendering.
const defaultComments = [
    {
        id: '123',
        userName: 'usx123',
        time: 'May 9, 2021 8:59 am',
        comment: 'Your blog is awesome! keep it up :-)',
        children: [
            {
                id: '234',
                userName: 'usx324',
                time: 'May 9, 2021 9:40 am',
                comment: 'Thanks usx123.'
            }
        ]
    },
    {
        id: '4325',
        userName: 'usx345',
        time: 'May 9, 2021 10:45 am',
        comment: 'Great post !'
    }
]

export { CommentContext, defaultComments }