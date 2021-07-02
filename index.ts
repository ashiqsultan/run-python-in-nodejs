import { execFile, ExecFileOptions } from "child_process";

// Child Process Options
const options: ExecFileOptions = { maxBuffer: 1024 * 4096 }; //4mb

/**
 * 
 * @param scriptPath - Should be from root /
 */
const execPython = async (scriptPath: string) => {
  return new Promise((resolve, reject) => {
    execFile("python3", [scriptPath], options, (error, stdout, stderr) => {
      if (error) {
        console.error("Error in execPython");
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

export default execPython;
