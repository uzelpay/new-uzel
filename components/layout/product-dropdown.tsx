"use client";

import Link from "next/link";
import { Briefcase, User, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ProductDropdown = ({
  isMobile = false,
  onCloseMobileMenu,
}: {
  isMobile?: boolean;
  onCloseMobileMenu?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (isMobile && onCloseMobileMenu) {
      onCloseMobileMenu();
    }
  };

  // Close dropdown when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobile]);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
    >
      {isMobile ? (
        <button
          type="button"
          onClick={handleToggle}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100/80"
        >
          <span>Product</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        <Link
          href="/product"
          className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-[#475467] transition-colors hover:text-neutral-900"
        >
          Product
          <ChevronDown className="h-4 w-4" />
        </Link>
      )}

      {isOpen && (
        <div
          className={`${
            isMobile
              ? "relative mt-2 w-full"
              : "absolute left-0 top-full z-50 mt-0 w-[240px]"
          }`}
        >
          <div
            className={`rounded-2xl bg-white p-2  ${
              isMobile
                ? "mt-2"
                : "mt-0 border border-[#E1E4EA] shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            }`}
          >
            <Link
              href="/product?type=business"
              onClick={isMobile ? handleClose : undefined}
              className="flex items-center gap-3 group rounded-xl hover:bg-[#F5F7FA] px-4 py-3 transition-colors"
            >
              <Briefcase className="h-5 w-5 group-hover:text-[#335CFF]" />
              <span className="text-sm font-medium text-[#101828]">
                Business
              </span>
            </Link>
            <Link
              href="/product?type=personal"
              onClick={isMobile ? handleClose : undefined}
              className="mt-2 flex items-center gap-3 group rounded-xl bg-white px-4 py-3 transition-colors hover:bg-[#F5F7FA]"
            >
              <User className="h-5 w-5 group-hover:text-[#335CFF]" />
              <span className="text-sm font-medium text-[#101828]">
                Personal
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
