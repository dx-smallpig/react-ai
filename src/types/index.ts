export type sideMenuItem = {
  path: string;
  title: string;
  icon: string;
};

export type sideMenuItemGroup = {
  belongs: string;
  children: sideMenuItem[];
};
