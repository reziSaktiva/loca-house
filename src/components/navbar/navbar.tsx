"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const Logo = () => (
    <Link href="/" className="bg-neutral-100 border-4 border-border rounded-xl p-1">
        <Image className="h-16 w-auto" src="/logo.svg" alt="Logo" width={202} height={72} />
    </Link>
);

export function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-50 bg-background/10 backdrop-blur-md border-b border-border">
            <NavDesktop />
            <NavMobile />
        </nav>
    );
};

const NavDesktop = () => {
    return (
        <div className="hidden lg:block">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Desktop Navigation Links - simplified from NavigationMenu */}
                    <div className="flex items-center gap-6">
                        <Logo />
                        <Link href="/shop">
                            Shop
                        </Link>
                        <Link href="/collections">
                            Collections
                        </Link>
                        <Link href="/blog">
                            Blog
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search Placeholder */}
                        <div className="relative hidden xl:block w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-4 pr-10 py-2 text-sm bg-secondary/50 rounded-full border-transparent focus:border-primary focus:ring-0 transition-all placeholder:text-muted-foreground"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <Search className="h-4 w-4" />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 border-l border-border pl-4">
                            <ThemeToggle />
                            <Link href="/cart">
                                <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                                    <ShoppingBag className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavMobile = () => {
    return (
        <div className="lg:hidden border-b border-border bg-background">
            <div className="wrapper p-4 flex items-center justify-between">
                <Logo />
                <div className="flex items-center gap-4">
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                            <ShoppingBag className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
