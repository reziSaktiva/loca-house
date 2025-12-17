"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Search, ShoppingBag, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Logo = () => (
    <Link href="/">
        <Image src="/logo-no-bg.svg" alt="Logo" width={132} height={48} />
    </Link>
);

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

const UserDropdown = () => (
    <button className="flex items-center gap-2" aria-label="User menu">
        <div className="size-8 rounded-full bg-secondary border border-border overflow-hidden">
            {/* Placeholder avatar */}
        </div>
    </button>
);

export function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <NavDesktop />
            <NavMobile />
        </nav>
    );
};

const NavDesktop = () => {
    return (
        <div className="hidden lg:block">
            <div className="wrapper py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Logo />

                        {/* Desktop Navigation Links - simplified from NavigationMenu */}
                        <div className="flex items-center gap-6">
                            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
                                Shop
                            </Link>
                            <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors">
                                Collections
                            </Link>
                            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                                About
                            </Link>
                        </div>
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
                            <UserDropdown />
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
