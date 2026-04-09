# High-Fidelity Responsive UI Clone

This project is a pixel-perfect, high-fidelity UI clone built with **React**, **Vite**, and **Vanilla CSS Modules**. It focuses on minimalist design principles, strict typography contrast, and fluid responsive layouts.

## 🚀 Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** CSS Modules (Vanilla CSS)
- **Typography:** Syne & Space Grotesk
- **Deployment:** Docker / Vercel

## 📦 How to Run

### 1. Local Development
To run the project locally without Docker:
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### 2. Docker (Recommended for Submission)
The project is containerized for consistent behavior across all environments.

**Build the image:**
```bash
docker build -t assignment-app .
```

**Run the container:**
```bash
docker run -p 3000:3000 assignment-app
```
Then visit [http://localhost:3000](http://localhost:3000)

## 🎨 Design Highlights
- **Strict Weight Contrast:** Hand-picked 300/800 font weight strategy.
- **Micro-animations:** Subtle hover effects and SVG decorations.
- **Clean Architecture:** Modular component-based structure.

---
*Created by Vishal Pandey*
