import { create } from "zustand";
import { routes } from "@/router";
import type { sideMenuItem, sideMenuItemGroup } from "@/types/index";

interface SystemState {
  sideOpen: boolean;
  sideOpenToggle: () => void;
  getSideMenu: () => sideMenuItemGroup[];
}

export const useSystemStore = create<SystemState>((set) => ({
  sideOpen: true,
  sideOpenToggle: () =>
    set((state) => ({
      sideOpen: !state.sideOpen,
    })),
  getSideMenu: () => {
    const menuMap = new Map();
    routes[0].children.forEach((item) => {
      const menuItem: sideMenuItem = {
        path: item.path,
        title: item.handle.title,
        icon: item.handle.icon,
      };
      if (menuMap.has(item.handle.belongs)) {
        menuMap.set(item.handle.belongs, [
          ...menuMap.get(item.handle.belongs),
          menuItem,
        ]);
      } else {
        menuMap.set(item.handle.belongs, [menuItem]);
      }
    });
    const menu: any[] = [];
    const menuKeys = Array.from(menuMap.keys());
    menuKeys.forEach((key) => {
      menu.push({
        belongs: key,
        children: menuMap.get(key),
      });
    });
    return menu;
  },
}));
