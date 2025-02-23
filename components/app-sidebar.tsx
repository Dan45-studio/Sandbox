"use client"

import * as React from "react"
import {
  AudioWaveform,
  BoxIcon,
  Calendar,
  CarIcon,
  Command,
  FileText,
  GalleryVerticalEnd,
  Home,
  Image,
  Video,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ducktail",
      logo: GalleryVerticalEnd,
      plan: "User",
    },
    {
      name: "Scott Sport",
      logo: AudioWaveform,
      plan: "Organization",
    },
    {
      name: "JRT Motorsport",
      logo: Command,
      plan: "Super Admin",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      submenu: false,
      isActive: true,
    },
    {
      title: "Garage",
      url: "#",
      icon: CarIcon,
      submenu: true,
      items: [
        { title: "Cars", url: "#" },
        { title: "Drivers", url: "#" },
        { title: "Teams", url: "#" },
      ],
    },
    {
      title: "Images",
      url: "#",
      submenu: false,
      icon: Image,
    },
    {
      title: "Videos",
      url: "#",
      submenu: false,
      icon: Video,
    },
    {
      title: "Documents",
      url: "#",
      submenu: false,
      icon: FileText,
    },
    {
      title: "Updates",
      url: "#",
      submenu: false,
      icon: BoxIcon,
    },
    {
      title: "Events",
      url: "#",
      submenu: false,
      icon: Calendar,
    },
  ],
  projects: [
    {
      name: "La Mans Classic",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Eltoril",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Silverstone Classic",
      url: "#",
      icon: Calendar,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
