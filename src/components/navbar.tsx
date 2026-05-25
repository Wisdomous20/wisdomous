"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { name: "WORK", href: "/pages/developers" },
  { name: "ABOUT", href: "/pages/company" },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50 border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span 
              className="font-bold text-lg tracking-tighter text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              WISDOMOUS
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                <span>{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-foreground"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <Link href="/pages/contact">
              <motion.button
                className="bg-foreground text-background px-6 py-2 rounded-full font-medium text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border/10"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/pages/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-foreground text-background px-6 py-2.5 rounded-full font-medium text-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
