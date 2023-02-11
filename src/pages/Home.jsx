import Search from "../components/Search";

function Home() {
  return (
    <>
      <div>
        <img src="/images/github-hero.webp" alt="hero banner" />
        <h1 className="text-3xl font-bold underline">Explore GitHub Repo</h1>
      </div>
      <Search />
    </>
  );
}

export default Home;
