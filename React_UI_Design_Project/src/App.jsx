import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const users = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    intro: "Young professional exploring digital banking solutions.",
    tag: "Young Client",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    intro: "Experienced executive managing cash flow and investments.",
    tag: "Corporate client",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    intro: "Tech-savvy user focused on mobile-first financial planning.",
    tag: "Digital-first",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    intro: "Family-focused customer seeking smart savings and budgeting tools.",
    tag: "Family planner",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    intro: "High-value client wanting personalized wealth management services.",
    tag: "Premium investor",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    intro: "Senior advisor looking for smarter retirement planning tools.",
    tag: "Retirement planner",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    intro: "Young entrepreneur tracking cash flow and business performance.",
    tag: "Startup founder",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    intro:
      "Mobile-first customer seeking effortless account control on the go.",
    tag: "Mobile user",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    intro: "Wealth manager focused on personalized financial recommendations.",
    tag: "Wealth advisor",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    intro:
      "Community banker delivering trust and transparency to every customer.",
    tag: "Community bank",
  },
];

function App() {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
