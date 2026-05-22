import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { COMPANY, formatCompanyAddress } from "@/lib/company";

const ContactInfo = () => {
  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-twklausanne text-3xl font-semibold text-[#101828] sm:text-4xl lg:text-5xl">
          Other Ways to Reach Us
        </h2>
        <p className="text-base text-[#475467] sm:text-lg">
          Choose the contact method that works best for you
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#E1E4EA] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#335CFF]/10">
            <Mail className="h-6 w-6 text-[#335CFF]" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#101828]">Email</h3>
          <p className="mb-4 text-sm text-[#475467]">
            Send us an email and we&apos;ll respond within 24 hours
          </p>
          <div className="space-y-2">
            <Link
              href="mailto:sales@uzel.com"
              className="block text-sm font-medium text-[#335CFF] hover:underline"
            >
              sales@uzel.com
            </Link>
            <Link
              href="mailto:support@uzel.com"
              className="block text-sm font-medium text-[#335CFF] hover:underline"
            >
              support@uzel.com
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E1E4EA] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#335CFF]/10">
            <Phone className="h-6 w-6 text-[#335CFF]" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#101828]">Phone</h3>
          <p className="mb-4 text-sm text-[#475467]">
            Call us during business hours for immediate assistance
          </p>
          <div className="space-y-2">
            <Link
              href="tel:+1234567890"
              className="block text-sm font-medium text-[#335CFF] hover:underline"
            >
              +1 (234) 567-890
            </Link>
            <p className="text-xs text-[#99A0AE]">Mon–Fri, 9AM–5PM ET</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E1E4EA] bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:col-span-2 lg:col-span-1">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#335CFF]/10">
            <MapPin className="h-6 w-6 text-[#335CFF]" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#101828]">Office</h3>
          <p className="mb-4 text-sm text-[#475467]">
            Visit us at our headquarters
          </p>
          <address className="not-italic text-sm leading-6 text-[#475467]">
            <p className="font-medium text-[#101828]">{COMPANY.legalName}</p>
            <p className="text-xs text-[#667085]">DBA {COMPANY.dbaName}</p>
            {formatCompanyAddress().map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

