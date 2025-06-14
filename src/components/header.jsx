"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };

  const linkClasses = (section) =>
    `${
      activeSection === section ? "border-b-2 border-secondary" : ""
    } text-primary font-medium`;

  return (
    <header className="bg-[#F3EEE7] sticky top-0 z-50 border-b border-[#043553]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/votechain-logo.svg"
              alt="VoteChain Logo"
              width={62}
              height={62}
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={linkClasses("inicio")}
              onClick={() => handleNavClick("inicio")}
            >
              Inicio
            </Link>
            <Link
              href="/#citizens"
              className={linkClasses("citizens")}
              onClick={() => handleNavClick("citizens")}
            >
              Ciudadanos
            </Link>
            <Link
              href="/#organizers"
              className={linkClasses("organizers")}
              onClick={() => handleNavClick("organizers")}
            >
              Organizadores
            </Link>
          </nav>

          {/* Botones desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/iniciar-sesion"
              className="px-4 py-2 text-primary font-medium border border-primary rounded hover:bg-[#00304d] hover:text-white transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registrarse"
              className="px-4 py-2 bg-[#00304d] text-white font-medium rounded transition-colors hover:bg-[#F16D20]"
            >
              Registrarse
            </Link>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" stroke="currentColor" />
              ) : (
                <Menu className="h-6 w-6" stroke="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-4 bg-[#F3EEE7]">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={linkClasses("inicio")}
                onClick={() => handleNavClick("inicio")}
              >
                Inicio
              </Link>
              <Link
                href="#citizens"
                className={linkClasses("citizens")}
                onClick={() => handleNavClick("citizens")}
              >
                Ciudadanos
              </Link>
              <Link
                href="#organizers"
                className={linkClasses("organizers")}
                onClick={() => handleNavClick("organizers")}
              >
                Organizadores
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                href="/iniciar-sesion"
                className="px-4 py-2 text-center text-primary font-medium border border-primary rounded"
                onClick={closeMenu}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/registrarse"
                className="px-4 py-2 text-center bg-[#00304d] text-white font-medium rounded hover:bg-[#F16D20] transition-colors"
                onClick={closeMenu}
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
