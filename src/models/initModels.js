
const User=require('./users.models')
const Conversation=require('./conversation.models')
const Message=require('./messages.modesl')
const Participant=require('./particpants.models')


const initModels=()=>{
    //! Crear participantes
    User.hasMany(Participant)
    Participant.belongsTo(User)

    //* participants-conversation
    Conversation.hasMany(Participant)
    Participant.belongsTo(Conversation)
    
    //? participanpts-Message
    Participant.hasMany(Message)
    Message.belongsTo(Participant)

}
module.exports=initModels

//https://dbdiagram.io/d/63e5c3ed296d97641d7fe0a7
