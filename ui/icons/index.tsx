import NewsLetterSVG from "./news-letter.svg";
import InstagramSVG from "./instagram.svg";
import MailSVG from "./mail.svg";
import LocationSVG from "./location.svg";
import SearchSVG from "./search.svg";

import styled, { css } from "styled-components";

const icon = css`
  * {
    stroke: black;
  }

  width: 25px;
  height: auto;
`;
export const NewsLetter = styled(NewsLetterSVG)`
  ${icon}
`;
export const Instragram = styled(InstagramSVG)`
  ${icon}
`;
export const Mail = styled(MailSVG)`
  ${icon}
`;
export const Location = styled(LocationSVG)`
  ${icon}
`;
export const Search = styled(SearchSVG)`
  ${icon}
`;
