require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

const githubData = {
    "login": "Ankush78-2",
    "id": 52918734,
    "node_id": "MDQ6VXNlcjUyOTE4NzM0",
    "avatar_url": "https://avatars.githubusercontent.com/u/52918734?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ankush78-2",
    "html_url": "https://github.com/Ankush78-2",
    "followers_url": "https://api.github.com/users/Ankush78-2/followers",
    "following_url": "https://api.github.com/users/Ankush78-2/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ankush78-2/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ankush78-2/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ankush78-2/subscriptions",
    "organizations_url": "https://api.github.com/users/Ankush78-2/orgs",
    "repos_url": "https://api.github.com/users/Ankush78-2/repos",
    "events_url": "https://api.github.com/users/Ankush78-2/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ankush78-2/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2019-07-15T11:37:35Z",
    "updated_at": "2025-01-16T18:04:56Z"
    }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('im_nkush@twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

