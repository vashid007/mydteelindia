"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        console.log("ThemeToggle mounted!");
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 p-2 opacity-0">
                <div className="h-5 w-5" />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => {
                console.log("Toggle clicked! Current theme:", theme);
                setTheme(isDark ? "light" : "dark");
            }}
            className="relative z-50 inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-foreground hover:bg-muted transition-all duration-300 focus:outline-none border border-border cursor-pointer"
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-400" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
