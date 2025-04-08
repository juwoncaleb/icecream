import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky bg_header top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex  space-x-8 text-sm font-medium">
          <Link href="/">
            <span className="hover:text-blue-600 head_text transition-colors cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-600 head_text transition-colors cursor-pointer">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-600 head_text transition-colors cursor-pointer">Contact</span>
          </Link>
          <Link href="/shop">
            <span className="hover:text-blue-600 head_text transition-colors cursor-pointer">Shop Now</span>
          </Link>
          <Link href="/wholesale">
            <span className="hover:text-blue-600 head_text transition-colors cursor-pointer">Wholesale</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/cart">
            <span className="hover:text-blue-600 transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
