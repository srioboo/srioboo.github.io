import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/srioboo/srioboo.github.io.git', // My repository
        user: {
            name: 'Salvador Rioboo', // my name
            email: 'salvador.rioboo.naranjo@gmail.com' // My email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);