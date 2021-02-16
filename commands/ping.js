module.exports = {
    name: 'ping',
    description: 'dit is een ping pong command!',
    execute(message, args){
        message.channel.send('pong')
    }
}