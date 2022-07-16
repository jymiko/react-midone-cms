import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        pathname: "/",
        title: "Dashboard",
      },
      "devider",
      {
        icon: "Home",
        pathname: "/banners",
        title: "Banners",
      },
      {
        title: "Manage Access",
        subMenu: [
          {
            pathname: "/user-ebook",
            title: "User Ebook",
            ignore: true
          },
          {
            pathname: "/role",
            title: "Role",
            ignore: true
          },
          {
            pathname: "/permission",
            title: "Permission",
            ignore: true
          },
          {
            pathname: "/publisher-access",
            title: "Publisher Access",
            ignore: true
          },
          {
            pathname: "/cs-access",
            title: "CS Access",
            ignore: true
          },
          {
            pathname: "/company-access",
            title: "Company Access",
            ignore: true
          }
        ]
      },
      {
        title: "Ebooks",
        subMenu: [
          {
            pathname: "/list-ebooks",
            title: "List Ebooks",
            ignore: true
          },
          {
            pathname: "/add-book",
            title: "Add Ebook",
            ignore: true
          }
        ]
      },
      {
        title: "Magazines",
        subMenu: [
          {
            pathname: "/list-magazines",
            title: "List Magazines",
            ignore: true
          },
          {
            pathname: "/add-magazine",
            title: "Add Magazine",
            ignore: true
          }
        ]
      },
      {
        title: "Newspapers",
        subMenu: [
          {
            pathname: "/list-newspaper",
            title: "List Newspaper",
            ignore: true
          },
          {
            pathname: "/add-newspaper",
            title: "Add Newspaper",
            ignore: true
          }
        ]
      },
      "devider",
      {
        title: "Vendors",
        subMenu: [
          {
            pathname: "/vendor-info",
            title: "Vendor Information",
            ignore: true
          },
          {
            pathname: "/brand-info",
            title: "Brands",
            ignore: true
          }
        ]
      },
      "devider",
      {
        title: "Complaint",
        subMenu: [
          {
            pathname: "/complaint-cc",
            title: "Credit Card",
            ignore: true
          },
          {
            pathname: "/complaint-google",
            title: "Google Payment",
            ignore: true
          },
          {
            pathname: "/complaint-itunes",
            title: "Itunes",
            ignore: true
          },
          {
            pathname: "/complaint-gopay",
            title: "Gopay",
            ignore: true
          },
          {
            pathname: "/complain-va",
            title: "Itunes",
            ignore: true
          },
          {
            pathname: "/complaint-linkaja",
            title: "Link Aja",
            ignore: true
          }
        ]
      },
    ],
  },
});

export { sideMenu };
