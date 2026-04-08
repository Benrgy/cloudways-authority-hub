import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  publishedTime?: string;
  hreflangEn?: string;
  hreflangNl?: string;
  jsonLd?: object | object[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/images/og-homepage.jpg",
  publishedTime,
  hreflangEn,
  hreflangNl,
  jsonLd,
}: SEOHeadProps) => {
  const fullUrl = `https://aimanagedcloudhostingadvisor.online${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {hreflangEn && <link rel="alternate" hrefLang="en" href={hreflangEn} />}
      {hreflangNl && <link rel="alternate" hrefLang="nl" href={hreflangNl} />}
      {(hreflangEn || hreflangNl) && (
        <link rel="alternate" hrefLang="x-default" href={hreflangEn || fullUrl} />
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
