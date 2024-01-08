import Button from "./button.tsx";
import ids from "../../config/id.ts";
import Hamburguer from "./hamburguer.tsx";

interface Props {
  showHeader: boolean;
  showOptions: boolean;
  switchShowOptions: () => void;
}

const Component = ({ showHeader, showOptions, switchShowOptions }: Props) => {
  return (
    <header
      className="fixed flex w-full top-0 left-0 z-10 px-14 py-1 h-32 bg-orange-100/80 backdrop-blur-sm lg:px-4 md:h-20"
      style={{
        transform: showHeader ? undefined : "translateY(-100%)",
        transition: "all .25s linear",
      }}
    >
      <nav className="flex grow">
        <div className="aspect-square h-auto flex justify-center items-center">
          <img
            alt="Logo"
            className="h-5/6 aspect-square"
            src="/image/logo.png"
          />
        </div>
        <div className="h-3/5 ml-auto my-auto hidden md:flex">
          <Hamburguer onClick={switchShowOptions} open={showOptions} />
        </div>
        <ul
          className={`flex-grow flex justify-end gap-10 items-center md:absolute md:top-20 md:left-0 md:flex-col md:w-svw md:bg-white/95 md:justify-start md:h-[calc(100svh-5rem)] md:pt-10 md:-translate-x-full`}
          style={{
            transform: showOptions ? "translateX(0%)" : undefined,
            transition: "all .25s linear",
          }}
        >
          {showOptions && <style>{"body {overflow: hidden}"}</style>}
          <Button href={"#" + ids.hero} onClick={switchShowOptions}>
            Inicio
          </Button>
          {/* <Button href={"#" + ids.about} onClick={switchShowOptions}>Acerca de mí</Button> */}
          <Button href={"#" + ids.contact} onClick={switchShowOptions}>
            ¿Cómo comprar?
          </Button>
          <Button href={"#" + ids.products} onClick={switchShowOptions}>
            Mangas disponibles
          </Button>
        </ul>
      </nav>
    </header>
  );
};

// md:${showOptions ? 'translate-x-0' : 'translate-x-full'}
export default Component;
