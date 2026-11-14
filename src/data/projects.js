// To add more screenshots to a project, add file paths (relative to /public)
// to its `images` array. To add a project, add a new object to the list.
export const projects = [
  {
    title: "Project 1 - My First Website",
    description:
      "This is my very first website that i did back on my freshmen year, i was just starting to understand HTML basics",
    placeholder: false,
    images: [
      "images/1st website/img2.jfif",
      "images/1st website/8f88181f-5306-4c2e-bbab-473ff143275b.jfif",
      "images/1st website/3a459efd-a377-45aa-819c-65a761decac0.jfif",
      "images/1st website/16ac3b55-9b28-426a-8ea3-32a53a5201e9 (1).jfif",
    ],
  },
  {
    title: "Project 2 - Student Record",
    description:
      "This is just a simple Student Record project that i made with a working database",
    placeholder: true,
    images: ["stud_rec.jfif"],
  },
  {
    title: "Project 3 - WeatherTrack",
    description:
      "This is by far the biggest project i made yet, it is a weather tracking app that works offline (this project is not yet done)",
    placeholder: true,
    images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `images/weathertrack/wt${n}.jfif`),
  },
  {
    title: "Project 4 - ALU Operation",
    description:
      "This is an Arithmetic Logic Unit (ALU) operation demo project that visualized how ALU works",
    placeholder: true,
    images: [
      "images/aluoperation/e41a2c47-61e5-4a3c-a24b-231e96b475bb.jfif",
      "images/aluoperation/ad56ed28-ea68-49c1-a451-2623c99c6375.jfif",
      "images/aluoperation/428e3557-669c-4642-b90f-e5206539139d.jfif",
    ],
  },
  {
  title: "Project 5 - My Game",
  description: "A short description of what you made.",
  placeholder: true,
  images: [
    "images/imageconverter/imcon.jfif",
  ],
},
];
