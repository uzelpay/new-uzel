import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#101828]">
      <div className="mx-auto w-full max-w-[1352px] px-6 pb-12  sm:px-10">
        <div className="flex flex-col gap-10 lg:gap-16">
          <Link
            href="/"
            className="flex items-center gap-3 text-neutral-900 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src={logo}
              alt="Uzel logo"
              width={100}
              height={100}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold uppercase tracking-wide">
                Contact
              </h3>
              <div className="flex flex-col gap-2 text-base text-[#475467]">
                <Link
                  href="mailto:sales@uzel.com"
                  className="transition-opacity duration-200 hover:opacity-70"
                >
                  Sales
                </Link>
                <Link
                  href="mailto:support@uzel.com"
                  className="transition-opacity duration-200 hover:opacity-70"
                >
                  Support
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold uppercase tracking-wide">
                Head Office
              </h3>
              <address className="not-italic text-base leading-7 text-[#475467]">
                68 Circular Road, #02-01,
                <br />
                Singapore, 049422
              </address>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold uppercase tracking-wide">
                Address
              </h3>
              <address className="not-italic text-base leading-7 text-[#475467]">
                BLK B1, Kontangora Estate,
                <br />
                Gwagwalada, FCT Abuja
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#EAECF0] pt-8 text-sm text-[#475467] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} UZEL. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-6">
            <Link
              href="/terms"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
