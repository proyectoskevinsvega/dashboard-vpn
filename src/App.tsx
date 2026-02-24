import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <About />
      <Pricing />
    </MainLayout>
  );
}

export default App;
