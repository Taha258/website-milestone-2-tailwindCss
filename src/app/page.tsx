import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";




export default function Home() {
  return (

      <main className="">
          <Hero/>
          <About/>
          <Menu/>
          <Blog/>
          <Contact/>
          <Footer/>
          
      </main>
     
  );
}
