import Router from "next/router";
import { useState } from "react";
import { getToken, sendCode } from "lib/api";
import {
  ButtonContainer,
  ChangeEmail,
  CodeInput,
  Error,
  Form,
  FormBody,
  Root,
  SubTitle,
  Title,
} from "./styled";
import { useForm } from "react-hook-form";
import { TextField } from "ui/fields";

export function LogIn() {
  const [codeSent, setCodeSent] = useState("");
  const [error, setError] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit: any = async ({ email, code }) => {
    console.log(email, code);
    if (email && code) {
      try {
        await getToken(email, code);
        Router.push("/");
      } catch (e) {
        setError("Email o código erroneos");
      }
    } else if (email) {
      setCodeSent(email);
      sendCode(email);
      const { code: receivedCode } = await sendCode(email);
      if (receivedCode) {
        setValue("code", receivedCode);
      }
    }
  };

  const fixEmail = () => {
    setCodeSent("");
    setValue("code", "");
    setError("");
  };

  const emailFieldStyle = codeSent ? { display: "none" } : {};
  const codeFieldStyle = codeSent ? {} : { display: "none" };

  return (
    <Root className="auth-root">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Ingresar</Title>

        {codeSent ? (
          <SubTitle>
            Te enviamos tu código a <span className="email"> {codeSent}</span>
          </SubTitle>
        ) : (
          <SubTitle>Para continuar ingresa tu email</SubTitle>
        )}

        <FormBody>
          <TextField
            style={emailFieldStyle}
            name="email"
            type="email"
            placeholder="Email"
            ref={register}
          />
          <div style={codeFieldStyle}>
            <CodeInput
              type="tel"
              maxLength="5"
              name="code"
              placeholder="Código"
              ref={register}
            />
            <ChangeEmail onClick={fixEmail}>Corregir email</ChangeEmail>
            {error && <Error>{error}</Error>}
          </div>
          <ButtonContainer>
            <button type="submit">{codeSent ? "Continuar" : "Ingresar"}</button>
          </ButtonContainer>
        </FormBody>
      </Form>
    </Root>
  );
}
