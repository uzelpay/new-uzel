import { Button } from "@/components/ui/button";
import trendline from "@/public/join/trend-line.svg";
import Image from "next/image";
import Link from "next/link";

const Join = () => {
  return (
    <section className="w-full px-4 pb-24 pt-[70px]">
      <div className="relative mx-auto max-w-[1352px] overflow-hidden rounded-[40px] bg-[#335CFF] px-6 py-28 text-center text-white sm:px-16 lg:px-24">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Take Control of Your Money?
          </h2>
          <p className="text-base f text-[#D5E2FF] sm:text-lg max-w-[480px] mx-auto">
            Join millions already managing their local and global finances the
            smart way with UZEL.
          </p>
          <Link href="/waitlist">
            <Button className="mt-4 h-12 rounded-[10px] px-8 text-sm bg-white text-[#525866] hover:bg-white border border-[#E1E4EA] font-semibold ">
              Join waitlist
            </Button>
          </Link>
        </div>

        <div className=" absolute inset-0 z-0 h-full  w-full">
          <Image src={trendline.src} alt="join" fill />
        </div>
      </div>
    </section>
  );
};

export default Join;
