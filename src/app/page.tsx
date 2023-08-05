import Header from "./components/Header";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 tracking-wide">
        <Features />
      </main>
    </>
  );
}
