import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Heart, Activity, Moon, Target, Zap } from "lucide-react";

export const DataInput = () => {
  const [restingHR, setRestingHR] = useState("");
  const [hrv, setHRV] = useState("");
  const [sleepHours, setSleepHours] = useState([7.5]);
  const [perceivedExertion, setPerceivedExertion] = useState([5]);
  const [workoutType, setWorkoutType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally save the data
    console.log({
      restingHR,
      hrv,
      sleepHours: sleepHours[0],
      perceivedExertion: perceivedExertion[0],
      workoutType,
    });
  };

  const getExertionLabel = (value: number) => {
    if (value <= 2) return "Very Easy";
    if (value <= 4) return "Easy";
    if (value <= 6) return "Moderate";
    if (value <= 8) return "Hard";
    return "Very Hard";
  };

  const getExertionColor = (value: number) => {
    if (value <= 4) return "text-success";
    if (value <= 6) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Daily Check-In
        </h1>
        <p className="text-muted-foreground">
          Log your biometric data to track recovery and training readiness
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive" />
              Heart Rate Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="resting-hr">Resting Heart Rate (bpm)</Label>
                <Input
                  id="resting-hr"
                  type="number"
                  placeholder="60"
                  value={restingHR}
                  onChange={(e) => setRestingHR(e.target.value)}
                  className="border-border focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hrv">Heart Rate Variability (ms)</Label>
                <Input
                  id="hrv"
                  type="number"
                  placeholder="40"
                  value={hrv}
                  onChange={(e) => setHRV(e.target.value)}
                  className="border-border focus:ring-primary"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-primary" />
              Recovery Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Sleep Duration: {sleepHours[0]} hours</Label>
              <Slider
                value={sleepHours}
                onValueChange={setSleepHours}
                max={12}
                min={4}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>4h</span>
                <span>8h</span>
                <span>12h</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              Training Load
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>
                Perceived Exertion (Yesterday): 
                <span className={`ml-2 font-semibold ${getExertionColor(perceivedExertion[0])}`}>
                  {perceivedExertion[0]}/10 - {getExertionLabel(perceivedExertion[0])}
                </span>
              </Label>
              <Slider
                value={perceivedExertion}
                onValueChange={setPerceivedExertion}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Very Easy</span>
                <span>Moderate</span>
                <span>Very Hard</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workout-type">Recent Workout Type</Label>
              <Select value={workoutType} onValueChange={setWorkoutType}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select workout type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy-run">Easy Run</SelectItem>
                  <SelectItem value="tempo-run">Tempo Run</SelectItem>
                  <SelectItem value="intervals">Intervals</SelectItem>
                  <SelectItem value="long-run">Long Run</SelectItem>
                  <SelectItem value="race">Race</SelectItem>
                  <SelectItem value="cross-training">Cross Training</SelectItem>
                  <SelectItem value="rest">Rest Day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button 
            type="submit" 
            className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Activity className="h-4 w-4 mr-2" />
            Submit Daily Data
          </Button>
          <Button type="button" variant="outline" className="border-border">
            Save Draft
          </Button>
        </div>
      </form>
    </div>
  );
};