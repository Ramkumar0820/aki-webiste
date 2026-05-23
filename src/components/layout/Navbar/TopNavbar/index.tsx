'use client';
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      { id: 11, label: "Trophy", url: "/shop?type=trophy", description: "In attractive and spectacular colors and designs" },
      { id: 12, label: "Frames", url: "/shop?type=frames", description: "Ladies, your style and tastes are important to us" },
      { id: 13, label: "Gifts", url: "/shop?type=gifts", description: "For all ages, with happy and beautiful colors" },
      { id: 14, label: "Photography", url: "/shop?type=photography", description: "Suitable for men, women and all tastes and styles" },
    ],
  },
  { id: 2, type: "MenuItem", label: "On Sale", url: "/shop#on-sale", children: [] },
  { id: 3, type: "MenuItem", label: "New Arrivals", url: "/shop#new-arrivals", children: [] },
];

const WHATSAPP_NUMBER = "919999999999"; // Replace with your number
const WHATSAPP_MESSAGE = "Hi! I'm interested in your products.";

const WhatsAppBtn = () => (
  <Link
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-[#25D366] via-[#20c45a] to-[#128C7E] hover:from-[#20c45a] hover:to-[#0e6b60] active:from-[#1ebe5d] active:to-[#0a5a50] transition-all duration-200 text-white font-medium px-3 py-1.5 rounded-full text-sm shrink-0 shadow-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.629 4.608 1.813 6.587L2.667 29.333l6.933-1.787A13.253 13.253 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24.267a11.013 11.013 0 01-5.6-1.52l-.4-.24-4.107 1.053 1.08-3.96-.267-.413A10.933 10.933 0 015.04 16c0-6.04 4.92-10.96 10.96-10.96S26.96 9.96 26.96 16s-4.92 10.933-10.957 10.933zm6.027-8.213c-.333-.167-1.96-.96-2.267-1.067-.306-.107-.533-.16-.76.16-.226.32-.866 1.067-1.066 1.293-.2.227-.4.254-.733.08-.334-.16-1.4-.507-2.667-1.627-.987-.88-1.653-1.96-1.853-2.293-.2-.334-.02-.507.147-.667.154-.147.334-.387.5-.573.167-.187.227-.32.334-.534.106-.213.053-.4-.027-.56-.08-.16-.76-1.813-1.04-2.48-.273-.653-.547-.56-.76-.573-.196-.013-.42-.013-.64-.013-.22 0-.573.08-.874.4-.3.32-1.147 1.12-1.147 2.733 0 1.614 1.174 3.174 1.334 3.4.16.227 2.307 3.52 5.587 4.8.78.333 1.387.533 1.867.68.784.24 1.494.207 2.054.127.627-.094 1.96-.8 2.24-1.574.28-.773.28-1.44.2-1.573-.08-.134-.293-.214-.627-.374z" />
    </svg>
    <span className="hidden lg:inline">WhatsApp</span>
  </Link>
);

const TopNavbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className={`max-w-frame mx-auto items-center py-5 md:py-6 transition-transform duration-300 shadow-sm px-6 xl:px-12 ${showHeader ? "translate-y-0" : "-translate-y-full"
        }`}>
        {/* <header
      className={`bg-white text-black fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-sm  py-5 md:py-6 px-6 xl:px-12 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    > */}
        {/* ── Mobile layout (below md) ── */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left: hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <ResTopNavbar data={data} />
          </div>

          {/* Center: logo — absolutely centered so it's always truly centered */}
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "absolute left-32 -translate-x-1/2 text-md whitespace-nowrap mb-1",
            ])}
          >
            innovationghar
          </Link>

          {/* Right: WhatsApp icon + Cart */}
          <div className="flex items-center gap-2 shrink-0">
            <WhatsAppBtn />
            <CartBtn />
          </div>
        </div>

        {/* ── Desktop layout (md and above) ── */}
        <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center gap-4 max-w-frame mx-auto">
          {/* Left: Logo */}
          <Link
            href="/"
            className={cn([integralCF.className, "text-2xl lg:text-[27px] mb-1 whitespace-nowrap"])}
          >
            innovationghar
          </Link>

          {/* Center: Nav tabs */}
          <div className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {data.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.type === "MenuItem" && <MenuItem label={item.label} url={item.url} />}
                    {item.type === "MenuList" && <MenuList data={item.children} label={item.label} />}
                  </React.Fragment>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: WhatsApp + Cart */}
          <div className="flex items-center gap-3">
            <WhatsAppBtn />
            <CartBtn />
          </div>
        </div>
        {/* </header> */}
      </div>
    </nav>
  );
};

export default TopNavbar;