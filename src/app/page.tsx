import Header from "./components/Header";
import Features from "./components/Features";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="tracking-wide">
        <Features />
        <Projects />
      </main>
    </>
  );
}
