import Navbar from "@/components/layout/navbar";
import Footer from "@/components/home/footer";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  return (
    <div>
      <Navbar />
      <section className="mx-auto flex min-h-[80vh] w-full max-w-[1352px] flex-col items-center justify-center px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#335CFF]/10">
              <Clock className="h-10 w-10 text-[#335CFF]" />
            </div>
          </div>
          
          <h1 className="mb-4 font-twklausanne text-4xl font-semibold text-[#101828] sm:text-5xl lg:text-6xl">
            Coming Soon
          </h1>
          
          <p className="mb-8 text-lg leading-7 text-[#475467] sm:text-xl">
            We&apos;re working hard to bring you an amazing product experience.
            Stay tuned for updates!
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/waitlist">
              <Button
                className="h-12 rounded-[10px] bg-[#335CFF] px-8 text-sm font-semibold text-white hover:bg-[#2547D0]"
              >
                Join Waitlist
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="h-12 rounded-[10px] border border-[#E1E4EA] bg-white px-8 text-sm font-semibold text-[#475467] hover:bg-[#F5F7FA]"
              >
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

