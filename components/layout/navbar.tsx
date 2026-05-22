"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.svg";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductDropdown from "./product-dropdown";

const NAV_LINKS: Array<{
  label: string;
  to: string;
  hasDropdown?: boolean;
}> = [
  { label: "Home", to: "/" },
  // { label: "Blog", to: "#blog" },
  { label: "Product", to: "/product", hasDropdown: true },
  { label: "About", to: "/about" },
  { label: "Contact us", to: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100/70 bg-neutral-0/80 backdrop-blur-xl font-geist">
      <div className="mx-auto flex max-w-[1352px] items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 text-neutral-900"
            onClick={closeMobileMenu}
          >
            <Image
              src={logo.src}
              alt="logo"
              width={100}
              height={100}
              className="w-full h-8"
            />
          </Link>

          <nav className="hidden items-center gap-2 text-sm font-medium text-[#475467] lg:flex">
            {NAV_LINKS.map((item) =>
              item.hasDropdown ? (
                <ProductDropdown key={item.label} isMobile={false} />
              ) : (
                <Link
                  key={item.label}
                  href={item.to}
                  className="rounded-xl px-4 py-2 transition-colors hover:text-neutral-900"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/waitlist">
            <Button
              variant="outline"
              className="border border-stroke-soft-200 bg-transparent text-[#475467] hover:border-stroke-soft-200 hover:text-[#475467]"
            >
              Join waitlist
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="-ml-2 text-neutral-700 hover:text-neutral-900 lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4 border-t border-neutral-100 bg-neutral-0 px-4 pb-6 pt-4 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.35)]">
            <nav className="flex flex-col gap-2 text-base font-medium text-neutral-700">
              {NAV_LINKS.map((item) =>
                item.hasDropdown ? (
                  <ProductDropdown
                    key={item.label}
                    isMobile={true}
                    onCloseMobileMenu={closeMobileMenu}
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.to}
                    className="rounded-xl px-3 py-2 transition-colors hover:bg-neutral-100/80"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex flex-col gap-2">
              <Link href="/waitlist">
                <Button className="btn-gradient-bg px-6 text-base font-semibold">
                  Join waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
