import styled, { css } from "styled-components";
import { PageColumn } from "ui/boxes";
import { FieldWithButton } from "ui/fields";
import { Instragram, Mail, NewsLetter, Location } from "ui/icons";
import { H4Bold } from "ui/text";

export const Root = styled.div`
  background-color: var(--red-200);
  padding: 0 20px;
`;
export const Content = styled(PageColumn)`
  padding: 20px 0 30px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ContainerTextNewsLetter = styled.div`
  @media (min-width: 769px) {
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const ContainerConfirmEmail = styled.div``;

export const FieldWithButtonFooter = styled(FieldWithButton)`
  max-width: 500px;
  width: 100%;

  > input {
    padding: 11px 16px;
    font-size: 16px;
    width: 100%;
    max-width: 482px;
    margin-top: 22px;
    border-bottom: none;
    background-color: var(--grey-100);
    ::placeholder {
      color: var(--grey-600);
    }
  }
  > button {
    margin-top: 22px;
    align-items: center;
    border-bottom: none;
  }
`;
const iconFooter = css`
  width: 28px;
  @media (min-width: 769px) {
    width: 36px;
    margin-right: 30px;
  }
`;

export const NewsLetterIcon = styled(NewsLetter)`
  ${iconFooter}
  * {
    stroke: none;
  }
  margin-right: 0px;
  @media (min-width: 769px) {
    width: 28px;
    margin-right: 0px;
  }
`;
export const HelpText = styled(H4Bold)`
  margin: 10px 0;
`;
export const NewsLetterTitle = styled(H4Bold)`
  margin: 0;
`;

export const MailIcon = styled(Mail)`
  * {
    stroke: var(--red-400);
  }
`;
export const LocationIcon = styled(Location)`
  * {
    stroke: var(--red-400);
  }
`;
export const HelpContainer = styled.div``;
export const ConainerCategory = styled.div``;
export const ContainerIcons = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
  @media (min-width: 769px) {
    margin-top: 35px;
    flex-direction: row;
  }
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  @media (min-width: 769px) {
    text-align: end;
    margin: 0;
  }
`;

export const WithIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
export const ThisYear = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: var(--red-300);
  @media (min-width: 769px) {
    padding: 8px;
  }
`;
