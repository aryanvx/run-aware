import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, Heart, Moon, Zap } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  trend: "up" | "down" | "stable";
}

const MetricCard = ({ title, value, change, icon, trend }: MetricCardProps) => {
  const getTrendColor = () => {
    if (trend === "up") return "text-success";
    if (trend === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-4 w-4" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className="shadow-card hover:shadow-primary/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center text-xs ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="ml-1">{change > 0 ? "+" : ""}{change}% from yesterday</span>
        </div>
      </CardContent>
    </Card>
  );
};

const RiskScoreCard = () => {
  const riskScore = 25; // Mock data
  const riskLevel = riskScore < 30 ? "low" : riskScore < 60 ? "moderate" : "high";
  
  const getRiskColor = () => {
    if (riskLevel === "low") return "bg-gradient-success";
    if (riskLevel === "moderate") return "bg-gradient-energy";
    return "bg-destructive";
  };

  const getRiskBadgeVariant = () => {
    if (riskLevel === "low") return "default";
    if (riskLevel === "moderate") return "secondary";
    return "destructive";
  };

  return (
    <Card className={`${getRiskColor()} text-white shadow-primary`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Overtraining Risk Score</CardTitle>
          <Badge variant={getRiskBadgeVariant()} className="capitalize">
            {riskLevel} Risk
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-2">{riskScore}/100</div>
        <p className="text-white/90 text-sm">
          {riskLevel === "low" && "Great recovery! You're ready for intense training."}
          {riskLevel === "moderate" && "Moderate stress detected. Consider lighter training today."}
          {riskLevel === "high" && "High stress levels. Rest or very light activity recommended."}
        </p>
      </CardContent>
    </Card>
  );
};

const TrainingRecommendations = () => {
  const recommendations = [
    { type: "Intensity", value: "Light", color: "bg-warning" },
    { type: "Duration", value: "30-45 min", color: "bg-primary" },
    { type: "Focus", value: "Recovery Run", color: "bg-success" },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Today's Training Plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium">{rec.type}</span>
            <Badge className={`${rec.color} text-white`}>{rec.value}</Badge>
          </div>
        ))}
        <div className="pt-4">
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            Log Today's Workout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => {
  const mockMetrics = [
    {
      title: "Resting HR",
      value: "58 bpm",
      change: -2.1,
      icon: <Heart className="h-4 w-4" />,
      trend: "down" as const,
    },
    {
      title: "HRV",
      value: "42 ms",
      change: 5.3,
      icon: <Activity className="h-4 w-4" />,
      trend: "up" as const,
    },
    {
      title: "Sleep",
      value: "7.5 hrs",
      change: 0.5,
      icon: <Moon className="h-4 w-4" />,
      trend: "up" as const,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Recovery Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor your training load and optimize performance
        </p>
      </div>

      {/* Risk Score - Featured */}
      <RiskScoreCard />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrainingRecommendations />
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Weekly Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center text-muted-foreground">
              Chart visualization coming soon
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};