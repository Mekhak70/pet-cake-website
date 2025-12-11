"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Cake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CartSheet } from "@/components/cart-sheet"
import Logo from '@/public/logo.png'
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/shop", label: t("shop") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            {/* <Cake className="h-5 w-5 text-primary-foreground" /> */}
            <Image src={Logo} alt=""/>
          </div>
          <span className="text-xl font-bold text-primary">Chupaboo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <CartSheet />
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/shop">{t("orderNow")}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <CartSheet />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
                {t("orderNow")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
