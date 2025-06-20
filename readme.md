## AI Interview Questions Generator

**Tech Stack**

- **Frontend**: Vite • React • Material‑UI (MUI)
- **Backend**: Node.js • Express • OpenAI API

### 🚀 Application Overview

An intelligent tool that generates tailored technical interview questions with appropriate difficulty calibration. Ideal for hiring managers and job candidates looking to prepare or evaluate technical and soft skills.

### 🧩 Key Features

1. **Dynamic Input Form**

   - Collects job title, description, required years of experience, seniority level,
   - Lets users list relevant skills along with years of experience per skill.

2. **AI‑Powered Question Generation**

   - Uses custom prompts sent to the OpenAI API on form submission.
   - Produces a table of interview questions with structured data:

     - **Skill Area**
     - **Question**
     - **Difficulty Level**
     - **Evaluation Criteria**

3. **Smart Question Distribution**

   - Begins with generic role-based questions.
   - Follows up with questions for each listed technical skill.
   - Concludes with soft‑skill questions.

---

### ⚙️ Technical Highlights & Architecture

- **Vite + React ± MUI**: Fast, modern, component‑driven frontend, optimized with styling and theming.
- **Express Backend**: Handles API requests and routes to OpenAI.
- **OpenAI Integration**: Custom prompt generation to shape output as structured, categorized results.
- **Scalable Design**: Clean separation of concerns, making it easy to evolve UI, API logic, or prompts independently.

---

### 🎯 Use Cases

- 🎙 Hiring teams seeking a quick and automated source of interview questions.
- 💼 Candidates preparing for interviews based on a real role description.
- 🛠 Developers looking for a modern integration of AI prompts into full‑stack apps.

---

### 📝 How to Use / Contribute

1. **Clone the repo**
2. **Install dependencies** in both `frontend/` and `backend/`
3. **Add your `.env`** with your `OPENAI_API_KEY` in backend
4. **Run dev servers**:

   - `npm run dev` in `frontend/`
   - `npm run dev` in `backend/`

5. **Design your own AI prompts**, themes, or UI improvements
6. **Open PRs** for feature enhancements, UI polishing, backend scaling, etc.

---

### 💻 Working Demos

1. **Working Demo 1 :** Set of interview questions generated for junior frontend developer position.
   (https://drive.google.com/file/d/1ABKabC54xEigr4n6EQFWADL9yQ3UjQ4i/view?usp=drive_link)
   
2. **Working Demo 2 :** Set of interview questions generated for mid-level backend developer role.
   (https://drive.google.com/file/d/131iLNDhITkwF0p4yOomDiB4i42KTsjRk/view?usp=drive_link)

---

🔗 Feel free to connect or DM for deeper technical walkthroughs or potential collaboration ideas!

---
