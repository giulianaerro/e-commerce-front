import { Footer } from "components/footer";
import { Header } from "components/header";
import { Root } from "./styled";

export function Layout({ children }: any) {
  return (
    <Root>
      <Header />
      <div>{children}</div>
      <Footer />
    </Root>
  );
}
