import React, { useState } from "react";
import Page from '~/components/Page'
import Twilio from "twilio";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountSid = "ACd7b4eca1d6be41e24dbdd34cf55b915d";
    const authToken = "00d639ad7e1aef61d430436c4a025048";
    const client = Twilio(accountSid, authToken);
    client.messages
      .create({
        to: "+17743012830",
        from: "+17743222824",
        body: inputValue,
      })
      .then((message) => console.log(message.sid))
      .catch(err => console.error(err));
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </Page>
  );
};

export default App;
