const Component = () => {
  return (
    <div className="w-full h-svh  pt-30 px-10 flex gap-20 justify-center items-center">
      <div className="flex justify-center items-center flex-col  w-5/12">
        <h1 className="text-6xl mb-10">
          Si estás en{" "}
          <span className="text-pink-400">Puerto Montt</span>, tu manga también
        </h1>
        <p className="text-2xl">
          Nanko Mangas, ubicada en los alrededores de Puerto Montt, se
          especializa en la venta de mangas. Contacto a través de Instagram,
          WhatsApp o correo electrónico para pedidos personalizados y entregas
          en lugares acordados. También participamos en eventos de anime con un
          pequeño stand.
        </p>
        <a className="" href=""></a>
        <a className="" href=""></a>
      </div>
      <div className="flex justify-center items-center  w-5/12 aspect-square">
        <img alt="Product" className="object-cover" src="/heroImage4.png" />
      </div>
    </div>
  );
};

export default Component;
