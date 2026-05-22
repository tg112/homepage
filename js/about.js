const interestings = [
  {
    title: "💻 Development",
    desc: `I’ve mainly worked as a frontend engineer, building products and user experiences.
               As I pursue an MS degree, I want to expand my skills and grow as a more versatile engineer.`,
  },
  {
    title: "☕️ Coffee",
    desc: `Coffee is part of my daily routine and something I never skip.
               I especially enjoy strong, dark-roasted black coffee.`,
  },
  {
    title: "⚾️ Baseball",
    desc: `I play recreational baseball and enjoy staying active through the sport.
               I’m also a fan of the Seattle Mariners.`,
  },
  {
    title: "✈️ Travel",
    desc: `I enjoy traveling both within Japan and abroad.
               Exploring new places, cultures, and experiences always excites me.`,
  },
  {
    title: "♨️ Onsen/Sauna",
    desc: `I enjoy spending quiet time at onsen and saunas.
               I like the feeling of simply relaxing and clearing my mind.`,
  },
  {
    title: "🍙 Food",
    desc: `I’m a big ramen fan and enjoy trying different shops whenever I can.
               Discovering great food is one of my favorite parts of everyday life and travel.`,
  },
];

const careers = [
  {
    year: "2016",
    startMonth: "Sept",
    title: "Consultant, Future Architect",
    desc: `I managed Oracle databases for retail sales data, implemented web APIs using Java, and led a team of five members to ensure project milestones were achieved.`,
  },
  {
    year: "2020",
    startMonth: "May",
    title: "Full-stack Engineer, Fenrir inc",
    desc: `Served as the frontend lead for the development of mobile ordering and meeting room reservation systems using Next.js, developed both frontend and backend systems for a logistics company’s portal site with TypeScript on AWS, and handled client communication and team management. <a href="https://www.fenrir-inc.com/jp/news/2021/07/19/tokyotorch-app/" target="_blank">Link</a>`,
  },
  {
    year: "2022",
    startMonth: "Aug",
    title: "Front-end Engineer, LY Corporation",
    desc: `Managed five B2C products related to LINE Official Accounts, led the renewal of a product with 3,000,000 daily page views to improve user experience and reduce technical debt, maintained multiple services as a frontend engineer. <a href="https://www.lycbiz.jp/jp/news/line-official-account/20231107/" target="_blank">Link</a>`,
  },
  {
    year: "2024",
    startMonth: "Oct",
    title: "Front-end Engineer, Godot inc",
    desc: `Implemented an AI and behavioral science application called Cogpot, designed the UI and frontend system architecture, maintained the application and handled customer inquiries, and reviewed backend API interfaces and architecture. <a href="https://prtimes.jp/main/html/rd/p/000000010.000106742.html" target="_blank">Link</a>`,
  },
  {
    year: "2026",
    startMonth: "Jan",
    title: "MS in CS Align, Northeastern University",
    desc: `I am currently pursuing a Master of Science in Computer Science at the Seattle campus of Northeastern University.`,
  },
];

const createInterestings = (interesting) => {
  return `
		<div class="interesting">
            <div class="interesting-header">
                <h3>${interesting.title}</h3>
            </div>
            <p class="interesting-text">${interesting.desc}</p>
        </div>
	`;
};

const createTimelineGroups = (career) => {
  return `
		<div class="timeline_group">
            <span class="time_year">${career.year}</span>
            <div class="timeline_item">
                <div class="time">
                	<span class="time_month">${career.startMonth}</span>
              	</div>
              	<div class="desc">
                	<p class="flag">${career.title}</p>
                 	${career.desc}
                </div>
            </div>
        </div>
	`;
};

document
  .querySelector(".interestings")
  .insertAdjacentHTML(
    "afterbegin",
    interestings.map(createInterestings).join("\n"),
  );

document.querySelector(".timeline").innerHTML = careers
  .map(createTimelineGroups)
  .join("\n");
