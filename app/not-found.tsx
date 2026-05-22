"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/home/footer";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="mx-auto flex min-h-[80vh] w-full max-w-[1352px] flex-col items-center justify-center px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6">
            <h1 className="mb-4 font-twklausanne text-8xl font-bold text-[#101828] sm:text-9xl">
              404
            </h1>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-[#335CFF]"></div>
          </div>

          <h2 className="mb-4 font-twklausanne text-3xl font-semibold text-[#101828] sm:text-4xl lg:text-5xl">
            Page Not Found
          </h2>

          <p className="mb-8 text-lg leading-7 text-[#475467] sm:text-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/">
              <Button className="h-12 rounded-[10px] bg-[#335CFF] px-8 text-sm font-semibold text-white hover:bg-[#2547D0]">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <div>
              <Button
                variant="outline"
                onClick={handleGoBack}
                className="h-12 rounded-[10px] border border-[#E1E4EA] bg-white px-8 text-sm font-semibold text-[#475467] hover:bg-[#F5F7FA]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
