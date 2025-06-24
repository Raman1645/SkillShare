import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("SkillShare-theme") || "coffee",

  setTheme: (theme) => {
    localStorage.setItem("SkillShare-theme", theme);
    document.documentElement.setAttribute("data-theme", theme); // ✨ Apply theme to <html>
    set({ theme });
  },
}));
