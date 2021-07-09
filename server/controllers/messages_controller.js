const messages = [];

let id = 0;

module.exports = {
   readMessages: (req, res) => {
      res.status(200).json(messages);
   },
   createMessages: (req, res) => {
      const { time, text } = req.body;

      const newMessage = {
         id,
         time,
         text
      };

      id++
      messages.push(newMessage);
      res.status(200).json(messages);
   }, 
   updateMessages: (req, res) => {
      const { text } = req.body;
      const { id } = req.params;

      const index = messages.findIndex((message) => message.id === +id)
      messages[index].text = text;
      res.status(200).json(messages);
   },
   deleteMessages: (req, res) => {
      const { id } = req.params;

      const index = messages.findIndex((message) => message.id === +id);

      messages.splice(index, 1);

      res.status(200).json(messages);
   }
};