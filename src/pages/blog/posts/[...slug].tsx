import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const slug = router.query.slug;
  const segments = Array.isArray(slug) ? slug : slug ? [slug] : [];

  if (!router.isReady) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Post: {segments.join("/")}</h1>
    </div>
  );
}