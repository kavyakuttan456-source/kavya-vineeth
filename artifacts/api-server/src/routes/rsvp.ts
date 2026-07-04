import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const DATA_FILE = path.resolve(process.cwd(), "data", "rsvps.json");

function loadRSVPs(): unknown[] {
  try {
    if (!fs.existsSync(path.dirname(DATA_FILE))) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveRSVPs(data: unknown[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

router.post("/rsvp", (req, res) => {
  const { name, guests, message } = req.body as {
    name: string;
    guests: number;
    message?: string;
  };

  if (!name || !guests) {
    res.status(400).json({ error: "name and guests are required" });
    return;
  }

  const rsvps = loadRSVPs();
  const entry = { name, guests, message: message ?? "", submittedAt: new Date().toISOString() };
  rsvps.push(entry);
  saveRSVPs(rsvps);

  res.status(201).json({ success: true, entry });
});

router.get("/rsvp", (_req, res) => {
  res.json(loadRSVPs());
});

export default router;
