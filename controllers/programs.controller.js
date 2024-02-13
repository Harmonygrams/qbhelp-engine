import { Program } from "../model/software.model.js";
export async function addPRogram({ program }) {
  try {
    const newProgram = new Program({
      title: program.title,
      description: program.description,
      category: program.category,
      productNumber: program.productNumber,
      licenseNumber: program.licenseNumber,
      validationCode: program.validationNumber || undefined,
      downloadUrl: program.downloadUrl,
    });
    const savedProgram = await newProgram.save();
    return savedProgram;
  } catch (err) {
    return err;
  }
}

export async function removeProgram({ id }) {
  try {
    const deletedProgram = await Program.findByIdAndDelete(id);
    return deletedProgram;
  } catch (err) {
    return err;
  }
}

export async function fetchAllPrograms({ query }) {
  const programQuery = {};
  if (query.title) {
    const title = query.title;
    programQuery.title = {
      $regex: new RegExp(title),
      $options: "i",
    };
  }
  try {
    const programs = await Program.find(programQuery);
    return programs;
  } catch (err) {
    return [];
  }
}
export async function fetchProgram({ id }) {
  try {
    const program = await Program.findById(id);
    return program;
  } catch (err) {
    return {};
  }
}
