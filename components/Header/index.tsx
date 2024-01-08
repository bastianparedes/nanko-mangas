import Button from "./button.tsx";

const Component = () => {
  return (
    <header className="fixed w-full bg-transparent top-0 left-0 backdrop-blur-sm">
      <nav className="flex px-5 py-5 h-32 relative">
        <div className="aspect-square h-auto flex justify-center items-center">
          <img
            alt="Logo"
            className="w-full h-full"
            src="/logo.png"
          />
        </div>
        <div className="flex-grow flex justify-end gap-4 items-center">
          <Button href="#a">Inicio</Button>
          <Button href="#b">Sobre mí</Button>
          <Button href="#c">Productos</Button>
          <Button href="#d">Contacto</Button>
        </div>
      </nav>
    </header>
  );
};

export default Component;
