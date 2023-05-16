import Users from './users';

export default [
    {
        image: 'https://picsum.photos/id/1/1000/800',
        user: Users[0].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #neonlearn #reactnative',
        profile_img: Users[0].image,
        likes: '534',
        comments: [
            {
                user: Users[1].username,
                comment: 'this is just a dummy comment for a dummy post in a dummy application!'
            },
            {
                user: Users[3].username,
                comment: 'this is just a dummy comment for a dummy post in a dummy application!'
            },
        ]
    },
    {
        image: 'https://picsum.photos/id/99/1000/800',
        user: Users[1].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #neonlearn #reactnative',
        profile_img: Users[1].image,
        likes: '744',
        comments: [
            {
                user: Users[4].username,
                comment: 'comment'
            },
        ]
    },
    {
        image: 'https://arashhosseini.ir/_next/static/media/avatar4.d3b9e427.jpg',
        user: Users[4].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #reactnative',
        profile_img: Users[4].image,
        likes: '744',
        comments: [
            {
                user: Users[3].username,
                comment: 'comment'
            },
        ]
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-react-320c8.appspot.com/o/posts%2Fpb4a05volni6YmRD1LVU%2Fimage?alt=media&token=43c1e90e-43f9-4a2f-becf-bbe9b93c0716',
        user: Users[4].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #reactnative',
        profile_img: Users[4].image,
        likes: '744',
        comments: [
            {
                user: Users[1].username,
                comment: 'comment'
            },
        ]
    },
]