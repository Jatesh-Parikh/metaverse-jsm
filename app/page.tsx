import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import GetStarted from "./components/GetStarted";
import WhatsNew from "./components/WhatsNew";
import World from "./components/World";
import Insights from "./components/Insights";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
    </>
  );
}
