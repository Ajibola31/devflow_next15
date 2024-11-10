"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from "next-themes";
// import { THemeProvider as NextThemeProvider} from "next-themes/dist/type"

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
export default ThemeProvider;
