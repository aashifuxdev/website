"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium hover:opacity-60 transition-opacity ${
        pathname === href ? "opacity-60" : ""
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-site mx-auto px-6 h-14 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 flex-1">
          {navLink("/about", "About")}
          {navLink("/experience", "Experience")}
        </nav>

        <Link href="/" className="flex-shrink-0">
          <span className="bg-black text-white text-sm font-semibold px-3 py-1.5 tracking-wide">
            Aashif Ali
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
          {navLink("/works", "Works")}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-4"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-5">
          {navLink("/about", "About")}
          {navLink("/experience", "Experience")}
          {navLink("/works", "Works")}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
