exports.triviaBot = (req, res) =>{
    const Event = req.body;
    let response = {};

    if(event.message.text == '/buzz'){
    const user = event.user.displayName;
    const time = new Date () .toISOString();
    
    //Save to sheet or memory (can be fixed later)
    console.log ('$user} buzzed at ${time}');

    response = {
      text: '${user}buzzed in first!'
    }; 
}else  { 
  response = {
    text: "Say /'buzz'  to ring in!" 
 };
}
res.jason(response);
};
