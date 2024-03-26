import cover from "../assets/pngwing 1.png";

const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 md:mt-12 rounded-3xl">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-none sm:text-6xl playfair-display flex-grow">
            <span className="text-[#23BE0A]">Books</span> to freshen up your bookshelf
          </h1>
           <div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#23BE0A] text-white work-sans">
              View The List
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={cover}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
