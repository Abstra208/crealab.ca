export default function Page(){
  return (
    <main>
      <section className="flex flex-row items-center justify-center h-[100svh]">
        <img src="logo.webp" alt="" className="w-[3rem] lg:w-[4rem]" />
        <div className="ml-6">
          <h1 className="text-xl lg:text-4xl font-bold">Créalab</h1>
          <p className="text-md lg:text-lg">Midi informatique à la camaradière</p>
        </div>
      </section>
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs lg:text-sm">© 2025 <a className="relative after:content-[''] after:absolute after:w-full after:h-px after:bg-black lg:after:hidden lg:hover:after:block after:bottom-0 after:left-0" href="mailto:ludovic@crealab.ca">Ludovic Morin</a></p>
    </main>
  );
}