import Header from "../components/Header/index.tsx";
import Hero from "../components/Hero.tsx";
import Main from "../components/Main.tsx";
import Footer from "../components/Footer.tsx";

const Page = () => {
  const ids = {
    hero: "hero",
    about: "about",
    products: "products",
  };

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Page;
