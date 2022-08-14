import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/srioboo/srioboo.github.io.git', // Update to point to your repository
        user: {
            name: 'Salvador Rioboo', // update to use your name
            email: 'salvador.rioboo.naranjo@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);