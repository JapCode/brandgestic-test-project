export interface INavItem {
  title: string;
  link: string;
}

export interface IHome {
  ["header-title"]: string;
  ["header-cta"]: string;
}

export interface IInfoData {
  nav: INavItem[];
  home: IHome;
}

export const getInfo = async (): Promise<IInfoData> => {
  const response = await fetch(
    `https://fu6hk3qh0f.execute-api.eu-west-3.amazonaws.com/default/frontendTest`
  );
  const data = await response.json();

  return data;
};
