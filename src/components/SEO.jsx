import { Helmet } from "react-helmet-async";

function SEO({
  title = "BELMAC Construction",
  description = "BELMAC Construction builds quality homes and residential projects with care, strength, and lasting workmanship.",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEO;