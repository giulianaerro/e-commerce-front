import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: bold;
  line-height: 1.25;
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.25;
`;

export const H3 = styled.h3`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.25;
`;

export const H4 = styled.h4`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 500;
`;
export const H4Bold = styled(H4)`
  font-weight: 700;
`;

export const BodyReg = styled.span`
  font-size: 16px;
  line-height: 1.4;
  font-weight: normal;
`;

export const BodyBold = styled(BodyReg)`
  font-weight: 700;
`;
export const SmallReg = styled.span`
  font-size: 14px;
  line-height: 1.4;
`;

export const SmallBold = styled(SmallReg)`
  font-weight: bold;
`;
export const Tiny = styled.span`
  font-size: 12px;
  line-height: 1.4;
`;
export const Caption = styled.span`
  font-size: 13px;
  font-weight: normal;
  text-transform: uppercase;
`;
