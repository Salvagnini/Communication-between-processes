import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const book = 'The Wind in the Willows (introductory fragment).txt'

// const readStream = fs.createReadStream(path.join(__dirname, '/files', book))
// console.log(readStream.readableHighWaterMark);

// readStream.on('data', (chunk)=>{
//     console.log('---------');
//     console.log(chunk);
// })

// process.stdin.on("data", data => {
//     data = data.toString().toUpperCase()
//     process.stdout.write(data + "\n")
// })



                    // ****************   2   *******************************
// const log = (...args) => {
//   process.stdout.write(args.join(" ") + "\n");
// }

// log("Hello,", "world!");

                    //**************   3   ******************

// const ask = (question) => {
//   return new Promise((resolve, reject) => {
//     process.stdout.write(question);
//     process.stdin.once('data', (data) => {
//       if (data.toString().trim()) {
//         resolve(data.toString().trim());
//       } else {
//         reject(new Error('Fields cannot be empty!'));
//       }})})};
// (async () => {
//   try {
//     const name = await ask('Enter your name: ');
//     const surname = await ask('Enter your surname: ');
//     process.stdout.write(`Hello, ${name} ${surname}!`);
//     process.exit();
//   } catch (error) {
//     process.stderr.write(error.message);
//     process.exit(1);
//   }
// })();
// *************************************************************************************


const ask = (question) => {
  return new Promise((resolve, reject) => {
    process.stdout.write(question);
    process.stdin.once('data', (data) => {
      const answer = data.toString().trim().toLowerCase();
      if (answer === 'Y' || answer === 'y' || answer === 'yes' || answer === 'YES') {
        resolve(true);
      } else if (answer === 'N' || answer === 'n' || answer === 'no' || answer === 'NO') {
        resolve(false);
      } else {
        reject(new Error('Invalid response format'));
      }
    });
  });
};

(async () => {
  try {
    const useSCSS = await ask('Do you want to use SCSS? ');
    const useESLint = await ask('Do you want to ESLint? ');

    console.log(`You want to use SCSS: ${useSCSS}`);
    console.log(`You want to use ESLint: ${useESLint}`);

    process.exit();
  } catch (error) {
    process.stderr.write(error.message);
    process.exit(1);
  }
})();
