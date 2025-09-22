import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, ExternalLink, Github, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "Full-stack web application built with React and Node.js featuring user authentication, payment processing, and inventory management",
      status: "Completed",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      startDate: "Jan 2024",
      endDate: "Mar 2024",
      githubUrl: "https://github.com/johnsmith/ecommerce-app",
      liveUrl: "https://myecommerce.vercel.app",
    },
    {
      id: 2,
      title: "Mobile Task Manager",
      description:
        "Cross-platform mobile application for productivity and task management with real-time synchronization",
      status: "In Progress",
      technologies: ["React Native", "Firebase", "Redux"],
      startDate: "Feb 2024",
      endDate: "Expected May 2024",
      githubUrl: "https://github.com/johnsmith/task-manager",
      liveUrl: null,
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive charts and analytics platform for business intelligence with real-time data processing",
      status: "Planning",
      technologies: ["D3.js", "Python", "PostgreSQL", "FastAPI"],
      startDate: "Apr 2024",
      endDate: "Expected Jul 2024",
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 4,
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing for customer support automation",
      status: "Completed",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      githubUrl: "https://github.com/johnsmith/ai-chatbot",
      liveUrl: "https://chatbot-demo.herokuapp.com",
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      description: "Web scraping and analytics tool for social media performance tracking and insights",
      status: "On Hold",
      technologies: ["Python", "Selenium", "Pandas", "Plotly"],
      startDate: "Nov 2023",
      endDate: "TBD",
      githubUrl: "https://github.com/johnsmith/social-analytics",
      liveUrl: null,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "default"
      case "In Progress":
        return "secondary"
      case "Planning":
        return "outline"
      case "On Hold":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-2">Manage and showcase your development projects</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>

        {/* Projects Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <Badge variant={getStatusColor(project.status)} className="mb-2">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {project.startDate} - {project.endDate}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>Complete list of your development projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Technologies</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{project.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">{project.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(project.status)}>{project.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {project.startDate} - {project.endDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {project.githubUrl && (
                          <Button variant="ghost" size="sm">
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
