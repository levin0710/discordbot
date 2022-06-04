const { MessageEmbed } = require("discord.js")

exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ")
    const embed = new MessageEmbed()
    .setTitle(`Total Commands: ${client.commands.size}`)
    .setDescription(commands + ", /tictactoe")
    .setFooter("Prefix for commands: ?")

    message.channel.send({embeds:[embed]})
}

exports.name = "help"