import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, GitBranch, Award, Star, Trophy, Target, Zap, Shield, Rocket, Heart, Users, BookOpen } from "lucide-react"

export default function BadgesPage() {
  const earnedBadges = [
    {
      id: 1,
      name: "JavaScript Expert",
      description: "Demonstrated advanced proficiency in JavaScript programming",
      icon: Code,
      category: "Programming",
      earnedDate: "March 2024",
      rarity: "Rare",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: 2,
      name: "Open Source Contributor",
      description: "Made significant contributions to open source projects",
      icon: GitBranch,
      category: "Community",
      earnedDate: "February 2024",
      rarity: "Epic",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: 3,
      name: "First Project",
      description: "Successfully completed your first development project",
      icon: Trophy,
      category: "Achievement",
      earnedDate: "January 2024",
      rarity: "Common",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      name: "Team Player",
      description: "Collaborated effectively on team projects",
      icon: Users,
      category: "Collaboration",
      earnedDate: "March 2024",
      rarity: "Uncommon",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ]

  const availableBadges = [
    {
      id: 5,
      name: "React Master",
      description: "Build 5 React applications with advanced patterns",
      icon: Rocket,
      category: "Programming",
      progress: 60,
      requirement: "3/5 React projects completed",
      rarity: "Rare",
    },
    {
      id: 6,
      name: "Full Stack Developer",
      description: "Complete projects using both frontend and backend technologies",
      icon: Shield,
      category: "Programming",
      progress: 75,
      requirement: "Complete 1 more full-stack project",
      rarity: "Epic",
    },
    {
      id: 7,
      name: "Code Reviewer",
      description: "Review and provide feedback on peer code submissions",
      icon: BookOpen,
      category: "Community",
      progress: 25,
      requirement: "Review 8 more code submissions",
      rarity: "Uncommon",
    },
    {
      id: 8,
      name: "Innovation Award",
      description: "Create a project with unique and creative solutions",
      icon: Zap,
      category: "Achievement",
      progress: 0,
      requirement: "Submit an innovative project",
      rarity: "Legendary",
    },
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Common":
        return "text-gray-600 bg-gray-100"
      case "Uncommon":
        return "text-green-600 bg-green-100"
      case "Rare":
        return "text-blue-600 bg-blue-100"
      case "Epic":
        return "text-purple-600 bg-purple-100"
      case "Legendary":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const badgeStats = {
    total: earnedBadges.length,
    thisMonth: 2,
    categories: ["Programming", "Community", "Achievement", "Collaboration"],
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Badges</h1>
          <p className="text-muted-foreground mt-2">Track your achievements and unlock new badges</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <Award className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{badgeStats.total}</p>
                <p className="text-sm text-muted-foreground">Total Badges</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Star className="h-8 w-8 text-yellow-500 mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{badgeStats.thisMonth}</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Target className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{availableBadges.length}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Heart className="h-8 w-8 text-red-500 mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{badgeStats.categories.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earned Badges */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Earned Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {earnedBadges.map((badge) => (
              <Card key={badge.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${badge.bgColor}`}>
                      <badge.icon className={`h-8 w-8 ${badge.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                          {badge.rarity}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {badge.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Earned {badge.earnedDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Badges */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Available Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableBadges.map((badge) => (
              <Card key={badge.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <badge.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">{badge.name}</h3>
                          <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                            {badge.rarity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                        <Badge variant="secondary" className="text-xs mt-2">
                          {badge.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{badge.progress}%</span>
                        </div>
                        <Progress value={badge.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground">{badge.requirement}</p>
                      </div>
                    </div>
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
