import { Folder, File, MoreVertical, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  type: "folder" | "file";
  sharedWith: number;
  lastModified: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Work Documents",
    type: "folder",
    sharedWith: 5,
    lastModified: "2023-11-15",
  },
  {
    id: "2",
    name: "Personal Photos",
    type: "folder",
    sharedWith: 2,
    lastModified: "2023-11-10",
  },
  {
    id: "3",
    name: "Project Proposal.pdf",
    type: "file",
    sharedWith: 3,
    lastModified: "2023-11-05",
  },
  {
    id: "4",
    name: "Vacation Plans",
    type: "folder",
    sharedWith: 4,
    lastModified: "2023-10-30",
  },
  {
    id: "5",
    name: "Budget Spreadsheet.xlsx",
    type: "file",
    sharedWith: 1,
    lastModified: "2023-10-25",
  },
  {
    id: "6",
    name: "Client Presentations",
    type: "folder",
    sharedWith: 7,
    lastModified: "2023-10-20",
  },
  {
    id: "7",
    name: "Meeting Notes.docx",
    type: "file",
    sharedWith: 2,
    lastModified: "2023-10-15",
  },
  {
    id: "8",
    name: "Research Papers",
    type: "folder",
    sharedWith: 3,
    lastModified: "2023-10-10",
  },
];

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="block group"
          >
            <div className="border rounded-lg p-4 transition-all duration-200 hover:shadow-md hover:border-primary">
              <div className="flex items-center justify-between mb-4">
                {project.type === "folder" ? (
                  <Folder className="w-8 h-8 text-blue-500" />
                ) : (
                  <File className="w-8 h-8 text-green-500" />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreVertical className="w-4 h-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
              <h2 className="font-semibold text-lg mb-2 truncate">
                {project.name}
              </h2>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{project.sharedWith}</span>
                </div>
                <span>{project.lastModified}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
