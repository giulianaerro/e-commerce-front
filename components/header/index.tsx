import Link from "next/link";
import { H4 } from "ui/text";
import {
  Root,
  Content,
  ImgLogo,
  OptionsLinks,
  UserOptions,
  ContainerCategory,
  SearchIcon,
} from "./styled";

export const Header = () => {
  return (
    <Root>
      <Content>
        <Link href="/">
          <ImgLogo />
        </Link>
        <OptionsLinks>
          <ContainerCategory>
            <H4>
              <SearchIcon />
            </H4>
          </ContainerCategory>
          <ContainerCategory>
            <H4>Categorías</H4>
          </ContainerCategory>
          <ContainerCategory>
            <H4>Contacto</H4>
          </ContainerCategory>
        </OptionsLinks>
        <UserOptions>
          <ContainerCategory>
            <H4>Acceder</H4>
          </ContainerCategory>
        </UserOptions>
      </Content>
    </Root>
  );
};
