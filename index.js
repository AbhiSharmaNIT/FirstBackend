//importing dot env
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req, res) => {
  res.send('Abhishek Sharma')
})

app.get('/welcome', (req, res) => {
  res.send('<h1> Welcome to my server </h1>')
})

//another app.get() for api github data of my profile

const githubData = {
  "login": "AbhiSharmaNIT",
  "id": 136017324,
  "node_id": "U_kgDOCBt1rA",
  "avatar_url": "https://avatars.githubusercontent.com/u/136017324?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AbhiSharmaNIT",
  "html_url": "https://github.com/AbhiSharmaNIT",
  "followers_url": "https://api.github.com/users/AbhiSharmaNIT/followers",
  "following_url": "https://api.github.com/users/AbhiSharmaNIT/following{/other_user}",
  "gists_url": "https://api.github.com/users/AbhiSharmaNIT/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AbhiSharmaNIT/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AbhiSharmaNIT/subscriptions",
  "organizations_url": "https://api.github.com/users/AbhiSharmaNIT/orgs",
  "repos_url": "https://api.github.com/users/AbhiSharmaNIT/repos",
  "events_url": "https://api.github.com/users/AbhiSharmaNIT/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AbhiSharmaNIT/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Abhishek Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 52,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-06-08T19:19:11Z",
  "updated_at": "2024-08-12T14:14:07Z"
}
app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})