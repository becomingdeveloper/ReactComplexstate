//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleOnchange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.email
        };
      else if (name === "lName")
        return {
          fName: prevValue.lName,
          lName: value,
          email: prevValue.email
        };
      else if (name === "email")
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleOnchange}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleOnchange}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleOnchange}
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
