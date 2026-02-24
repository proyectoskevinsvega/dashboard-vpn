import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Características", href: "#features" },
    { name: "Planes", href: "#pricing" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Status", href: "#status" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3 backdrop-blur-md bg-background/80 border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            Quantum<span className="text-primary">VPN</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-6 py-2 border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1 text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Iniciar Sesión</Button>
          <Button variant="gradient" size="sm">Empezar Ahora</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 space-y-4 md:hidden animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="outline" className="w-full">Iniciar Sesión</Button>
            <Button variant="gradient" className="w-full">Empezar Ahora</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
