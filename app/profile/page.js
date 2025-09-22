import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  Edit,
  Download,
} from "lucide-react"

export default function ProfilePage() {
  const profile = {
    name: "John Smith",
    title: "Computer Science Student",
    university: "University of Technology",
    year: "3rd Year",
    major: "Computer Science",
    gpa: "3.8/4.0",
    email: "john.smith@university.edu",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "September 2022",
    bio: "Passionate computer science student with a focus on full-stack web development and machine learning. I enjoy building innovative solutions and contributing to open-source projects. Always eager to learn new technologies and collaborate with fellow developers.",
    avatar: "/student-avatar.png",
    social: {
      github: "https://github.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      website: "https://johnsmith.dev",
    },
  }

  const skills = [
    { name: "JavaScript", level: "Advanced", category: "Programming" },
    { name: "React", level: "Advanced", category: "Frontend" },
    { name: "Node.js", level: "Intermediate", category: "Backend" },
    { name: "Python", level: "Advanced", category: "Programming" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "Git", level: "Advanced", category: "Tools" },
    { name: "Docker", level: "Beginner", category: "DevOps" },
    { name: "AWS", level: "Beginner", category: "Cloud" },
    { name: "TypeScript", level: "Intermediate", category: "Programming" },
    { name: "PostgreSQL", level: "Intermediate", category: "Database" },
  ]

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Inc.",
      duration: "Jun 2023 - Aug 2023",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement user interfaces and improved application performance by 25%.",
      skills: ["React", "TypeScript", "CSS", "Git"],
    },
    {
      title: "Teaching Assistant",
      company: "University of Technology",
      duration: "Jan 2023 - Present",
      description:
        "Assist students in Introduction to Programming course. Conduct lab sessions, grade assignments, and provide one-on-one tutoring for struggling students.",
      skills: ["Python", "Teaching", "Problem Solving"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2022 - 2026 (Expected)",
      gpa: "3.8/4.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Machine Learning",
        "Web Development",
        "Computer Networks",
      ],
    },
  ]

  const getSkillLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Beginner":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground mt-2">Manage your personal information and showcase your skills</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Resume
            </Button>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                    <AvatarFallback className="text-lg">JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{profile.name}</h2>
                    <p className="text-muted-foreground">{profile.title}</p>
                  </div>
                  <div className="w-full space-y-3 text-sm">
                    <div className="flex items-center">
                      <GraduationCap className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span>{profile.university}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span>{profile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span>Joined {profile.joinDate}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.duration}</p>
                      </div>
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevantCourses.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      </div>
                      <Briefcase className="h-5 w-5 text-muted-foreground mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    {index < experiences.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Technical skills and proficiency levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium text-foreground">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.category}</p>
                      </div>
                      <Badge className={getSkillLevelColor(skill.level)}>{skill.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
