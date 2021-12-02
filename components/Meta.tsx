import Head from "next/head";

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Adeo Web",
  keywords: "web development, programming, ecommerce",
  description: "Ambitious e. commercial solutions for business success",
};

export default Meta;
