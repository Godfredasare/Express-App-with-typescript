import express, { Express, Request, Response, Router } from "express";
import { Student, ValidateStudent } from "../models/student";
const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { error } = ValidateStudent(req.body);
  if (error)
    return res.json({ status: false, message: error.details[0].message });

  let student = new Student({
    name: req.body.name,
    studID: req.body.studID,
  });

  await student.save();

  res.send("Created");
});

router.get("/", async (req: Request, res: Response) => {
  let student = await Student.find();
  res.json(student);
});

export default router;
