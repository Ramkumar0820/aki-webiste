import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px] items-center">
      {/* Updated Text Content */}
      <p
        className={cn([
          integralCF.className,
          "font-bold text-[32px] md:text-[40px] text-white mb-9 md:mb-0 uppercase leading-tight",
        ])}
      >
        Have Questions? Get in Touch with Us Today
      </p>
      
      <div className="flex items-center justify-center md:justify-end">
        <div className="w-full max-w-[349px]">
          {/* Next.js Link styled as a secondary pill button */}
          <Link
            href="/contact"
            className="flex items-center justify-center text-sm sm:text-base font-medium text-black bg-white h-12 rounded-full px-4 py-3 w-full hover:bg-neutral-100 transition-colors text-center"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;