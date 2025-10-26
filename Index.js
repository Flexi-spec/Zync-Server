import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// 🎥 Your real video ads
const ads = [
  {
    id: 1,
    title: "Domino’s Pizza 🍕 — Fresh & Hot",
    category: "food",
    video: "https://cdn.pixabay.com/vimeo/388858014/pizza-31606.mp4",
    link: "https://www.dominos.ng/"
  },
  {
    id: 2,
    title: "PUBG Mobile 🎮 — Battle for Glory!",
    category: "games",
    video: "https://cdn.pixabay.com/vimeo/287710014/game-21468.mp4",
    link: "https://pubgmobile.com/"
  },
  {
    id: 3,
    title: "Apple iPhone 16 🔌 — The Future in Hand",
    category: "tech",
    video: "https://cdn.pixabay.com/vimeo/560513079/iphone-87631.mp4",
    link: "https://www.apple.com/iphone/"
  },
  {
    id: 4,
    title: "H&M Streetwear Sale 👕 — Up to 50% Off!",
    category: "fashion",
    video: "https://cdn.pixabay.com/vimeo/331218941/fashion-21145.mp4",
    link: "https://www.hm.com/"
  }
];

// 🌐 Base route
app.get("/", (req, res) => {
  res.send("🔥 Zynq Ad Video Server Running — /ads endpoint active");
});

// 🎯 Ads route (filters by category)
app.get("/ads", (req, res) => {
  const { category } = req.query;
  if (category) {
    return res.json(ads.filter(ad => ad.category === category));
  }
  res.json(ads);
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
