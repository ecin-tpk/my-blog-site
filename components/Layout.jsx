import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>My Blog Site</title>
    </Head>
    <div>
      <Header />
      {children}
    </div>
  </>
);

export default Layout;
