import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
        <h1 className='home-title'>Home </h1>
        <p> Welcome to the docs page for the topics learned during
            Dev Mountain's immersive software development bootcamp.
        </p>

        <h2>Quick start full-stack set-up</h2>
        <ol className='ordered-list'>
            <li>mkdir app-name</li>
            <li>cd app-name</li>
            <li>create-react-app .</li>
            <li>touch Procfile (web: npm run start)</li>
            <li>mkdir server</li>
            <ol>
                <li>touch index.js</li>
                <li>touch .env</li>
                <li>mkdir db</li>
                <li>touch controller.js (or mkdir controllers if applicable)</li>
            </ol>
            <li>edit Package.json</li>
            <ol>
                <li>prefix 'start' and 'build' with 'client-'</li>
                <li>"start": "cd server && node index.js"</li>
                <li>"heroku-postbuild":"npm install && npm run client-build"</li>
            </ol>
            <li>delete the yarn lock file generated by the react boilerplate</li>
            <li>npm install axios express massive dotenv</li>
            <li>add .env to gitignore file</li>
            <li>create github repo</li>
            <li>connect github repo to project</li>
            <li>create heroku app & connect it to github repo</li>
            <li>add heroku database to heroku app</li>
        </ol>
        </div>
    )
}

export default Home;