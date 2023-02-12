function Banner({ title, img = "" }) {
  return (
    <div className="w-screen min-h-[15.625rem] max-h-[28.125rem] relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <img
          className="w-full h-full object-cover"
          src={img || "/images/github-hero.webp"}
          alt="hero banner"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)] z-10" />

      <div className="absolute w-full px-4 top-1/2 z-20 -translate-y-[70%] text-center">
        <h1 className="text-[2rem] md:text-[3rem] leading-[2.375rem] md:leading-[3.5rem] my-4 font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
