import Banner from "../components/Banner";

export default function Error() {
  return (
    <>
      <Banner title="Not Found" />
      <div className="py-10 text-center px-5 md:px-8">
        <h1>Oops!</h1>
        <p>Page doesn&apos;t exist.</p>
      </div>
    </>
  );
}
