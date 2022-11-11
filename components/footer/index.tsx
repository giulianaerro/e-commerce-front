import { useState } from "react";
import { FieldButton, TextField } from "ui/fields";
import { BodyReg, H4, SmallReg } from "ui/text";
import {
  Root,
  Content,
  ContainerTextNewsLetter,
  ContainerConfirmEmail,
  FieldWithButtonFooter,
  NewsLetterIcon,
  HelpContainer,
  ConainerCategory,
  ContainerIcons,
  MailIcon,
  LocationIcon,
  WithIcon,
  Categories,
  HelpText,
  ThisYear,
  NewsLetterTitle,
} from "./styled";

export const Footer = () => {
  const thisYear = new Date().getFullYear();

  const [savedEmail, setSavedEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavedEmail(true);
  };

  return (
    <>
      <Root>
        <Content>
          <ContainerTextNewsLetter>
            <NewsLetterTitle>Recibí todas las novedades</NewsLetterTitle>
            {savedEmail ? (
              <ContainerConfirmEmail>
                <H4>¡Gracias por subscribirte!</H4>
              </ContainerConfirmEmail>
            ) : (
              <FieldWithButtonFooter onSubmit={handleSubmit}>
                <TextField
                  placeholder="Ingresá tu correo electrónico"
                  name="email"
                  required
                />
                <FieldButton>
                  <NewsLetterIcon />
                </FieldButton>
              </FieldWithButtonFooter>
            )}
          </ContainerTextNewsLetter>

          <HelpContainer>
            <Categories>
              <ConainerCategory>
                <HelpText>Preguntas frecuentes</HelpText>
              </ConainerCategory>
              <ConainerCategory>
                <HelpText>Cómo comprar</HelpText>
              </ConainerCategory>
              <ConainerCategory>
                <HelpText>Cambio y devoluciones</HelpText>
              </ConainerCategory>
            </Categories>
            <ContainerIcons>
              <WithIcon>
                <LocationIcon />
                <BodyReg>Córdoba, Argentina.</BodyReg>
              </WithIcon>
              <WithIcon>
                <MailIcon />
                <BodyReg>giulierro7@gmail.com</BodyReg>
              </WithIcon>
            </ContainerIcons>
          </HelpContainer>
        </Content>
      </Root>
      <ThisYear>
        <SmallReg>© {thisYear} | Giuliana Erro</SmallReg>
      </ThisYear>
    </>
  );
};
