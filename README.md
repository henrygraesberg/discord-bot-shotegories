# Shotegoriesbot
A discord bot made with [Discord.js](https://discord.js.org/) using the [Shotegories API](https://git.graesbgerg.com/Shotegories)

It supplies two commands, ```/category``` which responds with a random category and ```/shotegory``` which does the same, but also supplies a letter 1.5 seconds later to narrow down your possible responses

## Running the bot
After following the guide to create a bot application from [Discord.js guides](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot), modify the ```.env.example``` file replacing the value of ```DISCORD_BOT_TOKEN``` with your bot token, and ```CLIENT_ID``` with your applications application id (Found under general information, **NOT** the public key, but the value above)\
*Optionally*, also update the value of ```SHOTEGORIES_API_ENDPOINT``` if you're also running the [Shotegories API](https://git.graesbgerg.com/Shotegories) yourself. This will be equal to the root port/domain you're hosting on, as everything after the / is added in the utility files when querying.

After having set up your environment variables, run the commands:
```bash
npm i

node run start
```
This will install the required dependencies, and run both the file to deploy the commands to tell discord what commands are avaliable from your bot, and the command to start the bot.

As long as you keep the terminal session running the bot open, the shotegories commands will be avaliable in your discord server! 

## Adding the bot to your server
### When hosting the bot yourself (recommended)
Follow the guide on [adding your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to find out how to add it to your servers.

### By using my bot
[Bot invite link](https://discord.com/oauth2/authorize?client_id=1314352307629981767&permissions=8&integration_type=0&scope=bot) (You need to have the manage server permission on the server you wish to add the bot to) (**I rarely run this, so it is highly reccomended to clone the repo and run the bot yourself**)
