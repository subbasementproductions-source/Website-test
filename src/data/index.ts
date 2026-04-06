// ── CONSTANTS ──────────────────────────────────────────────────────────────

import type {Film} from "../types";

export const SBP_LOGO_PATH = "M 12.7 139.901 L 3.4 154.001 L 0 154.001 L 0 112.901 L 3.9 112.901 Q 5.5 121.101 9 128.001 Q 12.5 134.901 18.05 140.001 Q 23.6 145.101 31.25 147.951 Q 38.9 150.801 48.9 150.801 Q 59.5 150.801 67.25 147.201 Q 75 143.601 79.2 136.751 Q 83.4 129.901 83.4 120.001 Q 83.4 111.201 79.1 105.151 Q 74.8 99.101 67.65 94.651 Q 60.5 90.201 52 86.451 Q 43.5 82.701 35 78.601 Q 26.5 74.501 19.35 69.051 Q 12.2 63.601 7.9 55.851 Q 3.6 48.101 3.6 37.001 Q 3.6 25.901 9.2 17.601 Q 14.8 9.301 24.25 4.651 Q 33.7 0.001 45.1 0.001 Q 55 0.001 63.3 3.151 Q 71.6 6.301 77.7 12.701 L 87 0.001 L 90.3 0.001 L 90.3 41.101 L 86.5 41.101 Q 84.5 28.601 79 20.451 Q 73.5 12.301 65.3 8.351 Q 57.1 4.401 47 4.401 Q 32.7 4.401 25.35 11.151 Q 18 17.901 18 29.001 Q 18 36.901 22.25 42.401 Q 26.5 47.901 33.5 52.051 Q 40.5 56.201 48.9 59.901 Q 57.3 63.601 65.7 67.851 Q 74.1 72.101 81.1 77.901 Q 88.1 83.701 92.35 91.951 Q 96.6 100.201 96.6 112.001 Q 96.6 125.001 91 134.651 Q 85.4 144.301 75.1 149.601 Q 64.8 154.901 50.7 154.901 Q 37.8 154.901 28.4 150.901 Q 19 146.901 12.7 139.901 Z M 241.3 2.001 L 300.3 2.001 Q 318.4 2.001 329.85 7.351 Q 341.3 12.701 346.8 22.401 Q 352.3 32.101 352.3 45.101 Q 352.3 58.101 346.8 67.551 Q 341.3 77.001 329.85 82.101 Q 318.4 87.201 300.3 87.201 L 278.4 87.201 L 278.4 148.101 L 296.3 148.101 L 296.3 152.001 L 241.3 152.001 L 241.3 148.101 L 259.3 148.101 L 259.3 5.901 L 241.3 5.901 L 241.3 2.001 Z M 278.4 5.901 L 278.4 83.301 L 300.3 83.301 Q 307.5 83.301 313.05 79.901 Q 318.6 76.501 322.45 70.901 Q 326.3 65.301 328.3 58.551 Q 330.3 51.801 330.3 45.101 Q 330.3 38.401 328.3 31.501 Q 326.3 24.601 322.45 18.801 Q 318.6 13.001 313.05 9.451 Q 307.5 5.901 300.3 5.901 L 278.4 5.901 Z M 172.2 152.001 L 110.1 152.001 L 110.1 148.101 L 170.1 148.101 Q 178.7 148.101 186 143.551 Q 193.3 139.001 197.7 130.451 Q 202.1 121.901 202.1 110.001 Q 202.1 98.101 197.7 90.801 Q 193.3 83.501 186 80.201 Q 178.7 76.901 170.1 76.901 L 146.1 76.901 L 146.1 74.401 L 172.2 74.401 Q 186.3 74.401 198.1 77.901 Q 209.9 81.401 217 89.201 Q 224.1 97.001 224.1 110.001 Q 224.1 132.501 210.25 142.251 Q 196.4 152.001 172.2 152.001 Z M 168.1 75.601 Q 192.3 75.601 205.2 67.001 Q 218.1 58.401 218.1 39.001 Q 218.1 19.501 204.45 10.751 Q 190.8 2.001 168.1 2.001 L 110.1 2.001 L 110.1 5.901 L 168.1 5.901 Q 175.7 5.901 182.6 9.751 Q 189.5 13.601 193.85 21.401 Q 198.2 29.201 198.2 41.101 Q 198.2 53.001 193.85 60.001 Q 189.5 67.001 182.6 70.001 Q 175.7 73.001 168.1 73.001 L 146.1 73.001 L 146.1 75.601 L 168.1 75.601 Z M 147.2 150.501 L 147.2 3.501 L 128.1 3.501 L 128.1 150.501 L 147.2 150.501 Z";
export const OLDA24_LOGO_PATH =
  "M379.85,111.86h-.1v-.04h-10.9V.2l-105.9,117.6h-81.3c-3.5,0-6.3-1.28-6.3-4.78,0-2.4,1.3-4.4,3.2-5.5.1-.05.1-.07.2-.1,8.2-4.2,16.1-6.4,20.6-7.7l1.4-.4c2.7-.8,6.1-1.5,9.6-2.3,1.2-.3,2.5-.6,3.8-.8,21.5-4.9,50.6-14.82,50.6-49.12,0-7.6-1.9-15.3-6.3-22.2-7-11-20.2-19.9-41.8-22.5-4.2-.5-8.8-.8-13.7-.8-33.5,0-56.1,17.6-56.9,44v1.4c0,14.6,11.8,26.4,26.4,26.4s26.4-11.9,26.4-26.4-11.8-26.4-26.4-26.4c-.8,0-1.6,0-2.4.1h-.1c-5.4.5-6.16.81-10.12,2.36,2.79-3.66,3.49-4.13,8.22-7.57.1,0,.1-.1.2-.1,9-5.8,21-9,35.1-9,1.5,0,3,0,4.4.1h.9c3.1.4,5.2,2.35,5.2,5.55v72.95c0,3.4-2.4,6.3-5.5,7.1-.2,0-.3.1-.5.1-3,.6-5.7,1.3-8.1,2l-1.3.4c-6.5,1.8-20,5.6-31.9,14.7-4.2,3.2-7.8,6.7-10.9,10.6-7.8,9.9-11.7,22-11.7,36.1h84.9l34.3-38.1h62.3v38.1h43.5v-38.07h10.8v-.03h.1v-6.04.01h0ZM325.35,111.8l-48.19-.06,48.19-54.62v54.68ZM57.85,32.4c-5.4,11.3-16.6,12.5-16.6,12.5l5.4,11.5v.1L.15,155.9h6.58l15.62-33.3h55.23l15.5,33.3h47.96L70.75,4.9l-12.9,27.5ZM25.27,116.5l24.75-52.86,24.69,52.86H25.27Z";

// ── FILMS ──────────────────────────────────────────────────────────────────

/**
 * @typedef {Film} Film
 * @property {string} title
 * @property {string} year
 * @property {string} href
 * @property {string} videoId
 * @property {string} image   - 16:9 card thumbnail
 * @property {string} bg      - Full-width hero background
 */

/** @type {Film[]} */
export const FILMS: Film[] = [
  {
    title: "Undertone",
    year: "2026",
    href: "/films/undertone",
    videoId: "j6uDeBYDHu4",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/UND_Blast_Trailer_Thubmnail.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1767889006&s=aa873e94302f5ad9664c8b6b6d6ba2aa",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/g2rtsfc8cThe_Invite-Still_1.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1769640399&s=23032b9a5d53cafbbe4d3e6555a0e14d",
  },
  {
    title: "The Drama",
    year: "2026",
    href: "/films/the-drama",
    videoId: "6zmKcUa4Xxk",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/DRAMA_16x9_Trailer_ThubmnailTextless-1.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1770142907&s=2994000a75543b7336701fa9d3ed6190",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/DRAMA_16x9_Trailer_ThubmnailTextless-1.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1770142907&s=2994000a75543b7336701fa9d3ed6190",
  },
  {
    title: "Mother Mary",
    year: "2026",
    href: "/films/mother-mary",
    videoId: "ATGaqU6Srcc",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/MM_16x9_Trailer_Thubmnail_2.png?w=2400&q=82&fm=webp&fit=clip&dm=1764684477&s=f53e0548c7039ba0ab668b13288f95dd",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/MM_16x9_Trailer_Thubmnail_2.png?w=2400&q=82&fm=webp&fit=clip&dm=1764684477&s=f53e0548c7039ba0ab668b13288f95dd",
  },
  {
    title: "Backrooms",
    year: "2026",
    href: "/films/backrooms",
    videoId: "0HjdiohVOik",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/Backrooms_Trailer_Textless_16x9.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1774975581&s=ceb61a028485b3467fa76cc8fe34c2bd",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/Backrooms_Trailer_Textless_16x9.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1774975581&s=ceb61a028485b3467fa76cc8fe34c2bd",
  },
  {
    title: "The Death of Robin Hood",
    year: "2026",
    href: "/films/the-death-of-robin-hood",
    videoId: "tlSDDuWxO_0",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/DORH_Textless_Trailer_Thubmnail.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1767729515&s=5e5b8b4b63b23b09e22ae91966c4fe16",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/DORH_Textless_Trailer_Thubmnail.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1767729515&s=5e5b8b4b63b23b09e22ae91966c4fe16",
  },
  {
    title: "The Invite",
    year: "2026",
    href: "/films/the-invite",
    videoId: "xxx",
    image:
      "https://atwenty-four.transforms.svdcdn.com/production/images/g2rtsfc8cThe_Invite-Still_1.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1769640399&s=23032b9a5d53cafbbe4d3e6555a0e14d",
    bg: "https://atwenty-four.transforms.svdcdn.com/production/images/g2rtsfc8cThe_Invite-Still_1.jpg?w=2400&q=82&fm=webp&fit=clip&dm=1769640399&s=23032b9a5d53cafbbe4d3e6555a0e14d",
  },
];

// ── NAVIGATION ────────────────────────────────────────────────────────────

/** @type {{ label: string, href: string, external?: boolean }[]} */
export const FOOTER_LINKS = [
  { label: "Jobs",       href: "/jobs" },
  { label: "Shop",       href: "https://shop.sbp.com/",  external: true },
  { label: "App",        href: "https://app.sbp.com/",   external: true },
  { label: "Membership", href: "https://aaa24.sbp.com/", external: true },
];

/** @type {{ label: string, href: string }[]} */
export const LEGAL_LINKS = [
  { label: "Terms of Use",   href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

/** @type {{ label: string, href: string }[]} */
export const SOCIAL_LINKS = [
  { label: "Facebook",  href: "https://www.facebook.com/sbp" },
  { label: "Twitter",   href: "https://twitter.com/sbp" },
  { label: "Instagram", href: "https://instagram.com/sbp" },
  { label: "YouTube",   href: "https://www.youtube.com/sbp" },
];
