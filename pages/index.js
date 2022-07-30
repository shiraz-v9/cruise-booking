import Head from "next/head";

import Navbar from "../components/Navbar";
import Homepage from "../components/Home";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Kind of Cruise</title>
        {/* <!-- CSS only --> */}

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        ></link>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- JavaScript Bundle with Popper --> */}
      </Head>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      ></script>
      {/* <style>
    
      </style> */}
      <div className="_root">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
