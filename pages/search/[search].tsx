import { Layout } from "components/layout";
import { useRouter } from "next/router";

function SearchPage() {
  const router = useRouter();
  const q = router.query.search;
  return <Layout></Layout>;
}
export default SearchPage;
