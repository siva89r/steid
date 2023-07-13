import {
  IconDashboard,
  IconCube,
  IconUsers,
  IconFolder,
  IconTools,
} from "@tabler/icons-react";
import { Menu } from "../utils/interface";

export const menus: Menu[] = [
  { label: "Dashboard", icon: IconDashboard, link: "/" },
  {
    label: "Test Reports",
    icon: IconCube,
    children: [
      { label: "Test Report", link: "/TestReports/testreport" },
      { label: "TMATS Assignments", link: "/TestReports/tmatsAssignments" },
      {
        label: "Network Health Check",
        link: "/TestReports/networkHealthCheck",
      },
      { label: "Reports Graph", link: "/TestReports/reportsGraph" },
    ],
  },
  { label: "Users", icon: IconUsers, link: "/users" },
  { label: "File Library", icon: IconFolder, link: "/files" },
  {
    label: "Settings",
    icon: IconTools,
    children: [
      { label: "Project Settings", link: "/settings/project" },
      { label: "Data Model", link: "/settings/data-modal" },
      { label: "Roles & Permissions", link: "/settings/roles" },
    ],
  },
  { label: "About", icon: IconTools, link: "/general/about" },
];
