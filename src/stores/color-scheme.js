import { atom, selector } from "recoil";

const colorSchemeValue = atom({
  key: "colorSchemeValue",
  default:
    localStorage.getItem("colorScheme") === null
      ? "theme-1"
      : localStorage.getItem("colorScheme"),
});

const colorScheme = selector({
  key: "colorScheme",
  get: ({ get }) => {
    if (localStorage.getItem("colorScheme") === null) {
      localStorage.setItem("colorScheme", "theme-1");
    }

    return get(colorSchemeValue);
  },
});

export { colorSchemeValue, colorScheme };
