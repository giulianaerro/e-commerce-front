import { Footer } from "components/footer";
import { Header } from "components/header";
import { useMe } from "lib/hooks";
import { Root } from "./styled";

export function Layout({ children }) {
  const myData = useMe();
  return (
    <Root>
      <Header />
      <div>{children}</div>
      <Footer />
    </Root>
  );
}
