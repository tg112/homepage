# Design Document — Shota Togawa Personal Homepage

## Project Description

This project is a multi-page personal homepage for Shota Togawa, a software engineer pursuing an MS in Computer Science at Northeastern University (Seattle Campus). The site serves as a professional and personal introduction — covering career history, personal interests, and a way for visitors to get in touch.

The site is built as a static website using HTML, CSS, and vanilla JavaScript (ES6 modules). It consists of three pages:

- **Home (`index.html`)** — Hero section with an animated background slideshow and a brief welcome message.
- **About (`about.html`)** — Personal interests grid and a chronological career timeline.
- **Contact (`contact.html`)** — Contact information and a message form. *(AI-assisted page)*

---

## User Personas

### Persona 1 — The Recruiter

**Name:** Sarah Mitchell
**Role:** Technical Recruiter at a Seattle-area tech company
**Goal:** Quickly assess whether Shota is a strong candidate for a frontend or full-stack engineering role.
**Behavior:** Lands on the homepage via LinkedIn, skims the career timeline for relevant experience, checks technologies used, then decides whether to reach out.
**Needs:** Clear career history, links to real projects, easy contact path.
**Frustrations:** Vague bios with no concrete accomplishments, no contact information.

---

### Persona 2 — The Classmate / Peer

**Name:** Kevin Park
**Role:** Fellow MS CS student at Northeastern Seattle
**Goal:** Learn more about Shota, find shared interests, or connect for a class project.
**Behavior:** Saw the site link shared in a class Slack channel. Browses casually, reads the About page, looks for shared interests.
**Needs:** Personality and interests beyond just work — hobbies, background, what makes Shota interesting as a person.
**Frustrations:** Sites that feel like a dry résumé with no personal voice.

---

### Persona 3 — The Professor / Academic Evaluator

**Name:** Prof. Dario Alvarez
**Role:** CS instructor reviewing student portfolios
**Goal:** Evaluate the technical quality and completeness of the homepage against course criteria.
**Behavior:** Opens all pages, inspects the source, checks responsiveness, runs the validator.
**Needs:** Clean, standard-compliant HTML/CSS/JS, organized folder structure, working features.
**Frustrations:** Broken layouts, missing meta tags, non-semantic markup.

---

## User Stories

### Story 1 — Recruiter reviews career history
> As a recruiter, I want to see Shota's career timeline in reverse chronological order so that I can quickly evaluate his seniority and relevant experience without reading a full résumé.

---

### Story 2 — Recruiter contacts Shota
> As a recruiter, I want to send Shota a message directly from the website so that I can reach out without needing to find his email address separately.

---

### Story 3 — Classmate learns about Shota's interests
> As a classmate, I want to see what Shota is interested in outside of work so that I can find common ground and start a conversation.

## Design Mockups

[Design Mockups](./images/mockup.png)

### Home Page (`index.html`)

**Behavior:** Clicking the menu button slides down a full-width navbar with animated links (Home / About / Contact). Background images auto-cycle every 3 seconds with a CSS zoom animation on load.

---

### About Page (`about.html`)

**Behavior:** Interests are laid out in a CSS Grid (16 columns). A photo + intro card sits in the center. The career section is a vertical timeline with year badges and circular month indicators.

---

### Contact Page (`contact.html`) — AI-assisted

**Behavior:** Two-column layout (info left, form right) using Flexbox. Form validates on submit; on success the button shows "Sent!" and the form resets. Responsive — stacks vertically on mobile.
