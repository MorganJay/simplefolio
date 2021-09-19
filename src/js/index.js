import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import resume from "../assets/JAMES_MORGAN_CV_09_09_2021.pdf";

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(resume);
}
