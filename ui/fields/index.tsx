import styled from "styled-components";
import { H4 } from "ui/text";

export const FieldWithButton = styled.form`
  display: flex;
  align-items: stretch;
  > input {
    border-radius: 4px 0 0 4px;
  }
  > button {
    border-radius: 0 4px 4px 0;
    border-bottom: solid 0.5px var(--gris-oscuro);
  }
`;
export const TextField = styled(H4).attrs({
  as: "input",
})`
  outline: solid rgba(0, 0, 0, 0.15) 1px;
  border: none;
  padding: 10px 10px;
  border-bottom: solid 0.5px var(--gris-oscuro);
  background-color: var(--blanco);

  &:focus {
    background-color: white;
    outline: solid 1px var(--gris-claro);
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--gris);
  }
`;
export const FieldButton = styled.button`
  background-color: var(--red-400);
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  border: none;
  cursor: pointer;
`;
