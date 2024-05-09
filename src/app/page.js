import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Pizza, a global favorite, is a culinary masterpiece originating from
            Italy. Its foundation lies in dough, sauce, cheese, and toppings.
            From classic pepperoni to exotic combinations like Hawaiian, pizza
            offers endless variations. Baked to perfection, it s a comfort food
            enjoyed worldwide, bringing people together with each delicious
            slice.
          </p>
          <p>
            Pizza, a global favorite, is a culinary masterpiece originating from
            Italy. Its foundation lies in dough, sauce, cheese, and toppings.
          </p>
          <p>
            From classic pepperoni to exotic combinations like Hawaiian, pizza
            offers endless variations. Baked to perfection, it s a comfort food
            enjoyed worldwide, bringing people together with each delicious
            slice.
          </p>
        </div>
      </section>
      <section className="text-center my-8 ">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8 underline text-gray-500">
          <a className="text-4xl " href="tel:+212 666778899">
            +212 666778899
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 all rights reserved
      </footer>
    </>
  );
}
