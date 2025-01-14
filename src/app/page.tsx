import { Description } from "app/Components/Home/Description";
import { Hero } from "app/Components/Home/Hero";
import { MainProducts } from "app/Components/Home/MainProducts";

export default function Home() {
  console.log("hola devs");
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
