# Cypress + Cucumber Telnyx tests

This project contains automated end-to-end tests for the [Telnyx](https://telnyx.com) website, implemented using **Cypress** and **Cucumber (Gherkin)**. The tests validate navigation, element visibility, correct URL routing, link functionality, and page content accuracy.

---

## Tech Stack

- 🔗 [Node.js](https://nodejs.org/en) **v22.18.0**

- 🔗 [Cypress](https://docs.cypress.io) **v15.3.0**

- 🔗 [Git](https://git-scm.com) **v2.39.3 (Apple Git-145)**

---

## Clone Repository

```bash
git clone https://github.com/your-username/telnyx-cypress-tests.git
cd telnyx-cypress-tests
```

## Install Dependencies

```bash
npm install
```

## Run Tests

**Headless mode**

```bash
npm run cypress:run
```

**Headed mode**

```bash
npm run cypress:open
```

**If you're using alternate configurations**

```bash
npm run cypress:run -- --config-file configs/cypress.config.sec.js
```
