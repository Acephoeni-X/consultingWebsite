import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{router.pathname !== "/register" ? "Home" : "Query"}</title>
      <meta></meta>
    </Head>
  );
};

export default Header;
