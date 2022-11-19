import styled from "styled-components";
import { H3, BodyReg, Caption } from "ui/text";
import { TextField } from "ui/fields";

export const Root = styled.div`
  padding: 82px 20px 134px;
  display: flex;
  justify-content: center;
  background-color: var(--grey-300);
`;

export const Form = styled.form`
  background-color: var(--grey-200);
  padding: 41px 20px 55px;
  max-width: 551px;
  width: 100%;
`;

export const Title = styled(H3)`
  color: var(--violeta);
  text-align: center;
`;

export const SubTitle = styled(BodyReg)`
  color: var(--gris-oscuro);
  margin-top: 20px;
  display: block;
  text-align: center;
  .email {
    color: black;
    font-weight: bold;
  }
`;

export const FormBody = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const CodeInput = styled(TextField)`
  text-align: center;
  letter-spacing: 5px;
`;

export const ChangeEmail = styled(Caption)`
  color: var(--azul);
  cursor: pointer;
  margin-top: 20px;
  display: block;
`;

export const Error = styled(Caption)`
  color: red;
  margin-top: 20px;
  display: block;
`;

export const ButtonContainer = styled.div`
  margin-top: 60px;
  text-align: right;
`;
