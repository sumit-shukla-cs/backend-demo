import express from "express";

const app = express();

app.get("/api/university", (req, res) => {
  const university = [
    {
      domains: ["marywood.edu"],
      country: "United States",
      "state-province": null,
      name: "Marywood University",
      web_pages: ["http://www.marywood.edu"],
      alpha_two_code: "US",
    },
    {
      domains: ["lindenwood.edu"],
      country: "United States",
      "state-province": null,
      name: "Lindenwood University",
      web_pages: ["http://www.lindenwood.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["sullivan.edu"],
      country: "United States",
      "state-province": null,
      name: "Sullivan University",
      web_pages: ["https://sullivan.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["fscj.edu"],
      country: "United States",
      "state-province": null,
      name: "Florida State College at Jacksonville",
      web_pages: ["https://www.fscj.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["xavier.edu"],
      country: "United States",
      "state-province": null,
      name: "Xavier University",
      web_pages: ["https://www.xavier.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["tusculum.edu"],
      country: "United States",
      "state-province": null,
      name: "Tusculum College",
      web_pages: ["https://home.tusculum.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["cst.edu"],
      country: "United States",
      "state-province": null,
      name: "Claremont School of Theology",
      web_pages: ["https://cst.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["columbiasc.edu"],
      country: "United States",
      "state-province": null,
      name: "Columbia College (SC)",
      web_pages: ["https://www.columbiasc.edu/"],
      alpha_two_code: "US",
    },
    {
      domains: ["clpccd.edu"],
      country: "United States",
      "state-province": null,
      name: "Chabot-Las Positas Community College District",
      web_pages: ["http://www.clpccd.edu/"],
      alpha_two_code: "US",
    },
  ];
  res.send(university);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
