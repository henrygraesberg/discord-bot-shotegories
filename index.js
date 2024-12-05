const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

client.once(Events.ClientReady, readyClient => console.log(`Logged in as ${readyClient.user.tag}`))

const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder)
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath)
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command)
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
		}
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return

  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
});

client.login(process.env.DISCORD_BOT_TOKEN)