import Joi from "joi";
import mongoose, { InferSchemaType } from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, require: true },
  studID: { type: String, require: true },
});

type StudentType = InferSchemaType<typeof schema>;

 const Student = mongoose.model<StudentType>("Students", schema);

  const ValidateStudent = (e: StudentType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    studId: Joi.string().required(),
  });
  return schema.validate(e);
};

export {Student, ValidateStudent}
