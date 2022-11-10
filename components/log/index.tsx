import Router from "next/router";
import { useState } from "react";
import { getToken, sendCode } from "../../lib/api";

export function LogIn() {
  const [email, setEmail] = useState("");

  function handleEmailForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    sendCode(email);
    setEmail(email);
  }

  async function handleCodeForm(e) {
    e.preventDefault();
    const code = e.target.code.value;
    try {
      await getToken(email, code);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {email ? (
        <form onSubmit={handleEmailForm}>
          <input type="email" name="email" />
          <button>Enviar</button>
        </form>
      ) : (
        <form onSubmit={handleCodeForm}>
          <input type="text" name="code" />
          <button>Enviar</button>
        </form>
      )}
    </div>
  );
}
