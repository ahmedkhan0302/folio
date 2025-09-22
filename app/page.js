import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderOpen, Award, GitBranch, Code, Briefcase } from "lucide-react"

export default function Dashboard() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Full-stack web application built with React and Node.js",
      status: "Completed",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile app for productivity",
      status: "In Progress",
      tech: ["React Native", "Firebase"],
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts and analytics platform",
      status: "Planning",
      tech: ["D3.js", "Python", "PostgreSQL"],
    },
  ]

  const badges = [
    { name: "JavaScript Expert", icon: Code },
    { name: "Open Source Contributor", icon: GitBranch },
  ]

  const stats = [
    { label: "Repositories", value: "5", icon: GitBranch },
    { label: "Skills", value: "3", icon: Code },
    { label: "Internships", value: "1", icon: Briefcase },
  ]

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your career journey.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center p-6">
                <stat.icon className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Projects</h2>
            <Button variant="outline" size="sm">
              <FolderOpen className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Badges */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Badges</h2>
            <Button variant="outline" size="sm">
              <Award className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mr-4">
                    <badge.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground">Earned recently</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
