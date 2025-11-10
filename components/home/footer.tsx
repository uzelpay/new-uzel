import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#101828]">
      <div className="mx-auto flex w-full max-w-[1352px] flex-col items-center justify-center gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-neutral-900 transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 text-sm text-[#475467]">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            <Facebook size={20} />
          </Link>
        </div>

        <p className="text-center text-sm text-[#475467] lg:text-right">
          © {new Date().getFullYear()} Uzelplay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
