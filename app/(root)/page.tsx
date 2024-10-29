import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { Searchbar } from "@/components/shared/Searchbar";

export default function Home() {
  return (
    <>
      <section id='hero' className="bg-blue-50">
        <div className="wrapper grid grid-auto-rows-3 grid-auto-cols-1 py-6 px-4 gap-8 md:grid-cols-2 md:justify-items-center items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-4xl leading-10 font-bold ">Host, Connect, Celebrate—All <br></br> on  One Platform!</h1>
            <p className="">Connect with 3,000+ mentors from top companies in our global community.</p>
            <Button className="rounded-3xl w-full sm:w-fit">Explore Now</Button>
          </div>
          <div className="w-[20rem] h-[20rem] rounded-full overflow-hidden mx-auto">
            <img src="/assets/images/hero.jpg" className="w-full h-full object-cover"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="text-[1.5rem] font-medium">Trust by <br></br> Thousands of Events</h2>
          <Searchbar></Searchbar>
        </div>
      </section>
    </>

  );
}
