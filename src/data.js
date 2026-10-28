// All editable content lives here. Replace the placeholder values marked TODO.
import logo from "./assets/logo.png";
import heroBg from "./assets/bg.webp";
import heroWoman from "./assets/hero-woman.webp";
import about from "./assets/about.webp";
import why from "./assets/why.webp";
import strength from "./assets/strength.webp";
import functional from "./assets/functional.webp";
import rowing from "./assets/rowing.webp";
import hiit from "./assets/hiit.webp";
import calisthenics from "./assets/calisthenics.webp";
import personal from "./assets/personal.webp";
import dumbbells from "./assets/dumbbells.webp";
import deadlift from "./assets/deadlift.webp";
import gymfloor from "./assets/gymfloor.webp";
import staff1 from "./assets/staff1.webp";
import staff2 from "./assets/staff2.webp";
import staff3 from "./assets/staff3.webp";

export const site = {
  name: "Draftworks",
  logo,
  heroBg,
  heroWoman,
  about,
  why,
  contactBg: deadlift,
  phone: "+91 89596 90529",
  phoneHref: "tel:+918959690529",
  email: "hello@draftworks.in",
  address: "Your street address, City", // TODO
  hours: "Mon to Sat 5:00 am to 11:00 pm, Sun 6:00 am to 8:00 pm", // TODO
  reviewsUrl: "#", // TODO: link to your Google Business reviews page
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export const stats = [
  // TODO: replace with real numbers
  { value: "12+", label: "Years of experience" },
  { value: "2,400+", label: "Active members" },
  { value: "15+", label: "Expert coaches" },
  { value: "60+", label: "Classes every week" },
];

export const programs = [
  { title: "Strength Training", image: strength },
  { title: "Functional Fitness", image: functional },
  { title: "Rowing and Cardio", image: rowing },
  { title: "HIIT Conditioning", image: hiit },
  { title: "Calisthenics", image: calisthenics },
  { title: "Personal Training", image: personal },
];

export const reasons = [
  {
    title: "Certified coaches",
    text: "Trainers who correct your form and build plans around your goals.",
  },
  {
    title: "Serious equipment",
    text: "Racks, platforms, free weights and cardio machines that are kept in top shape.",
  },
  {
    title: "Long opening hours",
    text: "Early mornings to late nights, so training fits around your day.",
  },
  {
    title: "Plans that fit you",
    text: "Strength, fat loss or conditioning, with progress checks along the way.",
  },
  {
    title: "Clean, safe floor",
    text: "A well-kept space where beginners and athletes train side by side.",
  },
];

export const gallery = [
  { src: personal, alt: "Coach spotting a bench press" },
  { src: hiit, alt: "Member swinging battle ropes" },
  { src: dumbbells, alt: "Rack of iron dumbbells" },
  { src: functional, alt: "Athlete flipping a heavy tire" },
  { src: strength, alt: "Member squatting in a rack" },
  { src: gymfloor, alt: "Athlete deadlifting on the gym floor" },
  { src: rowing, alt: "Member on a rowing machine" },
  { src: calisthenics, alt: "Weighted pull-up in the rack" },
  { src: deadlift, alt: "Athlete pulling a heavy deadlift" },
  { src: why, alt: "Athlete deadlifting with chalk in the air" },
];

export const staff = [
  // TODO: real names and roles
  { name: "Alex Carter", role: "Head Coach", image: staff1 },
  { name: "Daniel Brooks", role: "Strength Coach", image: staff2 },
  { name: "Ryan Cole", role: "Fitness Coach", image: hiit },
];

export const reviews = {
  // TODO: replace with real Google reviews
  rating: "4.9",
  count: "320",
  items: [
    {
      name: "Aarav M.",
      time: "2 weeks ago",
      text: "Best gym I have trained at. The coaches actually watch your form and the equipment is always clean.",
    },
    {
      name: "Priya S.",
      time: "1 month ago",
      text: "I joined as a complete beginner. The team built a plan for me and I am stronger every month.",
    },
    {
      name: "Rohan K.",
      time: "3 months ago",
      text: "Open early, never overcrowded, and the free weights area has everything I need.",
    },
  ],
};
