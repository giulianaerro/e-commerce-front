import styled from "styled-components";
import { PageColumn } from "ui/boxes";
import { Search } from "ui/icons";
import { Logo } from "ui/logo";

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
