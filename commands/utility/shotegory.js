const { SlashCommandBuilder } = require("discord.js")
const dotenv = require('dotenv')

dotenv.config()

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shotegory')
    .setDescription('Get a random category and a letter for a game of SHOTegories 🍸🍸🍸!'),

  async execute(interaction) {
    const { category, letter } = await fetch(`${process.env.SHOTEGORIES_API_ENDPOINT}/shotegories?withLetter=true`).then(response => response.json())

    await interaction.reply(`Your random category is: ${category}!`)

    await sleep(1500)

    await interaction.followUp(`And your random letter is: ${letter}`)
  }
}