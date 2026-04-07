# EduAnalytics — Global Education Intelligence Dashboard

Final Year Project | CSE82 | AI-Driven Intelligent Education System Analyzer

## Features
- Country-wise performance rankings (ML-predicted)
- Correlation heatmap (EDA)
- Radar chart — compare any countries
- Feature importance (RF vs XGBoost)
- K-Means cluster scatter plot
- Hybrid education model generator
- Live prediction tool (interactive sliders)

## Tech Stack
- React 18 + Recharts
- Deployed on Vercel

## Deploy to Vercel (Step by Step)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/edu-dashboard.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New Project"
3. Import your `edu-dashboard` repo
4. Framework: Create React App (auto-detected)
5. Click Deploy

Your live URL will be: `https://edu-dashboard-xxxx.vercel.app`

## Run Locally
```bash
npm install
npm start
```
