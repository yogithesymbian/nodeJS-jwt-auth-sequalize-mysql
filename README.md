# # nodeJS-jwt-auth-sequalize-mysql

@ donation :D
`/api/auth/signup`

```
raw json
{
    "username": "yogiarifwidodo",
    "email": "yogiarifwidodo@yogi.com",
    "password": "yogi",
    "roles": [
        "moderator",
        "user"
    ]
}
```

`/api/auth/signin`

```
raw json
{
    "username": "yogiarifwidodo",
    "password": "yogi"
}
```

`/api/test/all` public access
`/api/test/user` user access
`/api/test/mod` moderator access
`/api/test/admin` admin access

`x-access-token :` `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA2MDE1NjU5LCJleHAiOjE2MDYxMDIwNTl9.pUya-Wqm8sVmadkxfGvYL7N0Y3d-18dT3IaZtSLUMS4`

```
[Service]
ExecStart=/usr/bin/node /var/www/html/api/nodejs/api-doa-nodeJS-express-mysql/server.js

Restart=always

StandardOutput=syslog

StandardError=syslog

SyslogIdentifier=node-app-1

User=nobody

Group=root

Environment=NODE_ENV=production PORT=5000

WorkingDirectory=/var/www/html/api/nodejs/api-doa-nodeJS-express-mysql

[Install]
WantedBy=multi-user.target
```

Then run the following to start both instances of our node application

`$ systemctl start node-app-1`
The first instance will be accepting requests at port 5000, where as the other one at port 5001. If any of them crashes it will automatically be restarted.

To make your node app instances run when the server starts do the following

`$ systemctl enable node-app-1`
In case there are problems with any of the following commands above you can use any of these two:

```
$ sudo systemctl status node-app-1
$ sudo journalctl -u node-app-1
```

The first line will show your app instance current status and whether it is running. The second command will show you all logging information including output on standard error and standard output streams from your instance.

Use the first command right now to see whether your app is running or whether there has been some problem starting it.

Re-deploying your app
With the current setup, if we have some new application code in our repository, all you have to do is the following

```
cd /opt/app
git pull
sudo systemctl restart node-app-1
```

## heroku

Start your app locally using the heroku local command, which is installed as part of the Heroku CLI.
`heroku local web`

```
/node_modules
npm-debug.log
.DS_Store
/*.env
```

Deploy your application to Heroku
After you commit your changes to git, you can deploy your app to Heroku.

```
git add .
git commit -m "Added a Procfile."
heroku login
Enter your Heroku credentials.
...
heroku create
Creating arcane-lowlands-8408... done, stack is cedar
http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
git push heroku master
...
-----> Node.js app detected
...
-----> Launching... done
       http://arcane-lowlands-8408.herokuapp.com deployed to Heroku
```

- Yogi Arif Widodo
- @yogithesymbian
