"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SwitchTheme from "./SwitchTheme";
import ChangeLang from "./ChangeLang";


export const ThemeChange = ({Lang1, Lang2}:{Lang1:string, Lang2:string}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className="w-full flex justify-around h-9 mt-3 fixed">
        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}><SwitchTheme theme={theme || 'light'}/></div>
        <ChangeLang Lang1={Lang1} Lang2={Lang2}/>
    </div>
  );
};