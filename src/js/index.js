import initTilt from "./tilt";
import initSr from "./sr";
import { addResume, setCurrentYearCopy } from "./utils";
import resume from "../assets/JAMES_MORGAN_CV.pdf";

export default function initApp() {
  initSr();
  initTilt();
  setCurrentYearCopy();
  // comment this if you don't want to attach your resume
  addResume(resume);
  console.log(data);
}
