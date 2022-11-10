import Head from "next/head";
import Navbar from "../components/layouts/Navbar";
import AboutUs from "../components/sections/AboutUs";
import Hero from "./../components/sections/Hero";
import Testimonies from "../components/sections/Testimonies";
import HappyClients from "./../components/sections/HappyClients";
import JoinUs from "./../components/sections/JoinUs";
import Help from "./../components/sections/Help";
import Footer from "../components/layouts/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <AboutUs />
        <Testimonies />
        <HappyClients />
        <JoinUs />
        <Help />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
