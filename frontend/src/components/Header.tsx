import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row items-center animate-fade-in">
      <div className="text-center w-full md:flex-1 mb-4 md:mb-0">
        {theme == "dark" ? (
          <img
            src="/logo_ddaark.png"
            alt="Logo"
            className="w-24 h-auto mx-auto mb-2"
          />
        ) : (
          <img
            src="/logo_light.png"
            alt="Logo"
            className="w-24 h-auto mx-auto mb-2"
          />
        )}

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2 tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Schedulyn 
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 font-semibold text-center max-w-md mx-auto leading-normal">
  Say it. See it. Scheduled.
</h2>

        <p className="text-sm md:text-base text-muted-foreground text-balance max-w-md mx-auto">
           
           {/* <br /> */}
           Turn your words into a structured, smart calendar in seconds.
        </p>
      </div>
      <div className="absolute top-4 right-4 md:relative md:top-0 md:right-0">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
