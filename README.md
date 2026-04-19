# 🚀 Ridgeway 6:10 Assistant  
**AI-First Overnight Intelligence & Investigation System**

---

## 🧠 Overview

Ridgeway 6:10 Assistant is an AI-powered system designed to help operators understand what happened overnight in industrial sites.

Instead of manually analyzing logs, the system acts as an **AI investigator** that collects evidence, uses tools, and generates a structured morning briefing.

---

## 🎯 Problem

Industrial sites generate many overnight signals:

- Fence alerts  
- Badge failures  
- Vehicle movement  
- Drone patrol activity  

Operators need fast answers:

> What happened? What matters? What needs attention?

---

## 💡 Solution

The system transforms raw signals into an AI-driven investigation workflow:

- AI agent investigates events  
- Dynamically calls tools  
- Correlates multiple signals  
- Generates structured report  
- Keeps humans in control  

---

## 🗺️ Map-Based Spatial Intelligence

- Shows key site locations:
  - Gate 3  
  - Block C  
  - Storage Yard  

- Visualizes risk zones  
- Connects AI findings to physical space  
- Highlights drone inspection areas  

---

## 🧾 Investigation Timeline

- Displays AI tool execution history  
- Shows step-by-step reasoning  
- Improves transparency and trust  

---

## 🤖 AI Report

The system generates a structured report:

- Summary of events  
- Confidence level  
- Uncertainty points  
- Recommended actions  

---

## 👤 Human-in-the-Loop Review

Operators can:

- Approve AI decision  
- Mark as harmless  
- Escalate to security  

Human control is always preserved.

---

## ⚙️ System Architecture

## ⚙️ System Design Overview

The system follows a modular AI-agent architecture where the frontend, backend, and tool-based reasoning engine work together to simulate an intelligent investigation system for industrial site monitoring.

---

## ⚙️ System Architecture

```text id="arch_main"
Frontend (React)
        ↓
Backend (Node.js / Express)
        ↓
AI Agent Loop (Reasoning Engine)
        ↓
Tool Layer (MCP-style Tools)
        ↓
Simulated Site Data

```markdown

##📁 Project Structure

ridgeway-6-10-assistant/
│
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── agent/
│   ├── tools/
│   ├── data/
│   ├── routes/
│   └── app.js
│
├── shared/
├── docs/
└── README.md

###🚀 Running the Project

# 1️⃣ Clone repo
git clone https://github.com/your-username/ridgeway-6-10-assistant.git
cd ridgeway-6-10-assistant

# =========================
# 2️⃣ Backend setup
# =========================
cd server
npm install

echo PORT=5000 > .env

npm run dev

# Backend → http://localhost:5000


# =========================
# 3️⃣ Frontend setup
# =========================
cd ../client
npm install

npm run dev

# Frontend → http://localhost:5173


# =========================
# 4️⃣ System Flow
# =========================
# React UI → Express API → AI Agent Loop → Tools → Data → UI
