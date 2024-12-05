const { SlashCommandBuilder } = require("discord.js")
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  data: new SlashCommandBuilder()
    .setName('category')
    .setDescription('Get a random category for a game of categories!'),

  async execute(interaction) {
    const { category } = await fetch(`${process.env.SHOTEGORIES_API_ENDPOINT}/shotegories`).then(response => response.json())

    await interaction.reply(`Your random category is: ${category}!`)
  }
}