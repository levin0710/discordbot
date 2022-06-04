exports.run = (client, message, args) => {
    let toSay = args.join(" ")
    if(!toSay) return message.channel.send({content: "You have to say something too!"})
    message.channel.send({content: toSay})
}

exports.name = "say"