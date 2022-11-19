import Link from "next/link";
import { FieldButton, TextField } from "ui/fields";
import { H4 } from "ui/text";
import { useRouter } from "next/router";
import {
  Root,
  Content,
  ImgLogo,
  OptionsLinks,
  UserOptions,
  ContainerCategory,
  SearchIcon,
  CareerCourseMenu,
  ContainerMenuBox,
  UserMenuOption,
  LoginButton,
  FieldWithButtonFooter,
} from "./styled";

export const Header = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    router.push(`/search/${searchValue}`);
  };

  return (
    <Root>
      <Content>
        <Link href="/">
          <ImgLogo />
        </Link>
        <OptionsLinks>
          <ContainerCategory>
            <H4>
              <OptionsLinks>
                <UserOptions>
                  <SearchIcon />

                  <CareerCourseMenu>
                    <ContainerMenuBox>
                      <UserMenuOption>
                        <FieldWithButtonFooter onSubmit={handleSubmit}>
                          <TextField
                            placeholder="Buscar"
                            name="search"
                            required
                          />
                          <FieldButton>
                            <SearchIcon />
                          </FieldButton>
                        </FieldWithButtonFooter>
                      </UserMenuOption>
                    </ContainerMenuBox>
                  </CareerCourseMenu>
                </UserOptions>
              </OptionsLinks>
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
            <Link href={"/signin"}>
              <H4>Acceder</H4>
            </Link>
          </ContainerCategory>
        </UserOptions>
      </Content>
    </Root>
  );
};
