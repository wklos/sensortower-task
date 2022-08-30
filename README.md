# Sensor Tower task

## Tech stack

[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)

---

## Prerequisites

Make sure Node.js and NPM are installed on your development machine.<br>
To avoid compatibility and security issues please use latest Long Term Support version or current version. They could be found [here](https://nodejs.org/).

To check if they are installed execute following commands and verify outputs:

```bash
node --version
```

```bash
npm --version
```

---

## Setup

Checkout code

```bash
git checkout https://github.com/wklos/sensortower-task.git
```

Go to recently checked out directory

```bash
cd sensortower-task
```

Install dependencies

```node
npm install
```

---

## Working with code

Check code formatting

```bash
npm run prettier:check
```

Fix code formatting issues

```bash
npm run prettier:write
```

Run static analysis of the code

```bash
npm run lint:check
```

Fix autofixable problems found during static analysis

```bash
npm run lint:fix
```

---

## Running tests

### Run all tests

```bash
npm run test
```

or

```bash
npm test
```

### Run specific file with tests

```bash
npx mocha <path to file with tests>
```

### Note

After executing `npm run test`/`npm test` script 2 test reports (1st: HTML file with inlined styles, 2nd: JSON file) are generated by [Mochawesome](https://github.com/adamgruber/mochawesome) library and saved inside `reports` folder.

## QA Notes

- While sending HTTP GET `https://api.sensortower.com/v1/ios/sales_report_estimates_comparison_attributes?comparison_attribute=absolute&time_range=week&measure=units&device_type=total&date=2021-01-04&auth_token={INSERT_YOUR_AUTH_TOKEN}&category=6000` not all apps listed in results have custom tag 'Primary Category' set to 'Business' (category code 6000 represents category name 'Business')
