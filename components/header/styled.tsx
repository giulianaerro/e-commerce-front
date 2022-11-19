import styled from "styled-components";
import { PageColumn } from "ui/boxes";
import { FieldWithButton } from "ui/fields";
import { Search } from "ui/icons";
import { Logo } from "ui/logo";
import { H4 } from "ui/text";

export const Root = styled.header`
  background-color: var(--grey-200);
  padding: 0 20px;
`;
export const Content = styled(PageColumn)`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImgLogo = styled(Logo)`
  cursor: pointer;
  width: auto;
`;
export const OptionsLinks = styled.div`
  display: flex;
  gap: 85px;
`;
export const UserOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const ContainerCategory = styled.div`
  cursor: pointer;
`;

export const SearchIcon = styled(Search)``;

export const CareerCourseMenu = styled.div`
  background-color: var(--grey-300);
  color: white;
  border: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: 6px 16px 24px rgba(0, 0, 0, 0.14);

  border-radius: 4px;
  position: absolute;
  left: -15px;
  top: 100%;
  display: none;
  z-index: 20;
  ${UserOptions}:hover & {
    display: block;
  }
`;

export const ContainerMenuBox = styled.div`
  width: 350px;
`;

export const UserMenuOption = styled.a`
  display: flex;
  flex-direction: column;
  padding: 0 22px 22px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 12px;
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  gap: 6px;
  position: relative;
  @media (min-width: 769px) {
    font-size: 16px;
  }
`;
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
