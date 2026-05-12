# Expense Tracker

This is a simple web application that helps you keep track of your income and expenses. It calculates your total balance and saves your transaction history directly in your browser so you don't lose your data when you refresh the page.

## What It Does

- **Add Transactions**: Enter a description and an amount. Use positive numbers for income and negative numbers (e.g., `-50`) for expenses.
- **Live Summary**: Automatically calculates and updates your total balance, income, and expenses based on your transaction history.
- **Delete Transactions**: Click the "X" button next to any transaction to remove it from the list.
- **Save Data**: Uses the browser's `localStorage` to remember your transactions even if you close or refresh the tab.

## Tools Used

- HTML, CSS, and JavaScript
- Web Storage API (localStorage)

## How to Use It

1. Open the `index.html` file in your web browser.
2. Fill in the "Description" (e.g., "Salary" or "Coffee").
3. Fill in the "Amount" (e.g., `5000` for income, `-150` for an expense).
4. Click "Add transactions" to see your balance update instantly!

## Code Example: How localStorage Works

This project relies heavily on `localStorage` to save data. However, `localStorage` can only save data as **text (strings)**. Because our transactions are stored in a JavaScript array, we have to convert them to text before saving, and back to an array after loading.

**1. Saving the Data:**

```javascript
// JSON.stringify converts our JavaScript array into a string so the browser can save it
localStorage.setItem("transactions", JSON.stringify(transactions));
```

**2. Loading the Data:**

```javascript
// JSON.parse converts the saved string back into a usable JavaScript array
// The `|| []` means: "If there's no saved data yet, just use an empty array"
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
```

## How to Practice

If you want to practice writing this code yourself:

1. Clone or download this local repository to your computer.
2. Run the code right after cloning by opening `index.html` in your web browser.
3. See the web page design and understand how it is working.
4. Create your own practice files (like `practice.js` or `practice.html`) in the project folder.
5. Create your own code from scratch without looking at the main code!
