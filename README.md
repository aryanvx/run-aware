You know ya boy had to build something for the runners out there. Otherwise, I'd just be logging miles with no data to back it up. And we don't do that around here.

# **Biometric Feedback System for Teen Distance Runners**

## **Overview**  
This is a **biometric feedback system** built specifically for teen distance runners. Think **Strava vibes** but with a little more focus on *your* body and a little less flexing on the timeline. I kept the interface **clean**, the colors **athletic**, and the data **meaningful**. You log your metrics, the system tells you what your body's saying back.

## **User Preferences**  
Simple, everyday language. **Data should be clear**—not something you need a sports science degree to decode.

## **System Architecture**  
This MVP’s running off a **simple frontend system**, no backend magic yet. Just data input, visualizations, and feedback. All static for now. Here’s how it’s structured:

- **Frontend**: Straightforward JS, HTML, CSS  
- **UI Structure**: Dashboard-style layout with separate input and display components  
- **Visuals**: Responsive graphs and risk color indicators  
- **Design**: Mobile-first with card-based layout

## **Key Components**  

### **Daily Metrics Input**  
Log your key recovery and training indicators:
- **Resting Heart Rate (RHR)**
- **Heart Rate Variability (HRV)**
- **Sleep duration + quality**
- **Perceived exertion** (you know how cooked you felt)
- **Workout type** (easy run, intervals, long run, cross, etc.)

### **Dashboard**  
- **Real-time overtraining risk score** (0–100)
- **Color-coded feedback**: green = chill, amber = watch yourself, red = sit down bro
- **Trend graphs** so you can actually see what’s been going on the past week
- **Basic recommendations** based on your current state

### **Trend Visualizations**  
HRV, RHR, and sleep graphed across the past 7 days:
- **Responsive charts** with hover info  
- **Color-coded performance dips**  
- Helps you spot the early warning signs before your legs do

## **Design System**  

- **Primary Colors**: Athletic blue and teal—clean, modern, trustworthy  
- **Accent Colors**: Green, amber, red for feedback clarity  
- **Typography**: Sharp sans-serif fonts that look good and read better  
- **Layout**: Max-width content, mobile-first, card-based interface  
- **Animations**: Smooth transitions for inputs and chart reveals—no jank

## **Data Flow**  
Because this is a static build:

- **No server-side data processing**  
- **Mock data only** (for now)  
- **All logic handled in-browser**  
- If I do forms, they’ll be integrated with something like Netlify or Firebase down the line

## **External Dependencies**  

### **Fonts**  
- Google Fonts (**Inter**, optionally something else if I feel bold)  
- **Preconnected** for faster loading

### **Charts**  
- Probably using **Chart.js** or **Recharts**—depends how spicy I’m feeling  
- **Rendered client-side**, no DB

### **Icons**  
- **Font Awesome via CDN**  
- Mostly for UI cues and social stuff if I add it later

## **No Backend Dependencies**  
- **Fully frontend** right now  
- No user auth, no storage, no server  
- That may change (stay tuned for the glow-up)

## **Deployment Strategy**  
Runs on any static host—**Netlify**, **GitHub Pages**, **Vercel**, etc.  
- **No build step required**  
- Push it and it’s live

## **Performance Considerations**  
- **Fonts preconnected**  
- **Minimal third-party bloat**  
- **CDN-loaded assets**  
- **Lightweight across the board**

## **What’s Next**  
This is version one. The plan is to eventually:
- **Connect to real-time wearable data** (Apple Health, WHOOP, Garmin, etc.)  
- **Add team-level data** for coaches or squads  
- **Set up notifications** for overtraining risk spikes  
- **Track injuries**, long-term health trends, and more

## **Summary**  
Just like a good base run, this project is **simple but essential**. It gives teen runners the **feedback they need** to train smart, stay healthy, and know when to go hard—or take a rest day without guilt. **Built it because I needed it. Sharing it because someone else probably does too.**
