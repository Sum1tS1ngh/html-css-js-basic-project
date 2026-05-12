# Drag & Drop Board

This is a simple interactive board application that allows you to drag and drop items (cards) across different lists. It's built with basic HTML, CSS, and JavaScript.

## What It Does

- **Drag Items**: Click and hold a card or list item to start dragging it across the screen.
- **Drop Items**: Release the item over a new list or board to drop it seamlessly into place.
- **Visual Feedback**: The boards highlight when an item is dragged over them, letting you know exactly where it can be dropped.

## Tools Used

- HTML, CSS, and JavaScript
- [HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

## How to Use It

1. Open the `index.html` file in your web browser.
2. Click and hold any draggable item on a board.
3. Move it to another board or list and release your mouse to drop it!

## Code Example (For Quick Review)

If you want a quick refresher on how this works under the hood when you look at it later, here is the core logic:

**1. Make it draggable in HTML:**

```html
<div id="item1" draggable="true">Drag Me!</div>
```

**2. Save the item's ID when you start dragging (JavaScript):**

```javascript
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
```

**3. Allow dropping and move the item to the new board (JavaScript):**

```javascript
function dragDrop(event) {
  event.preventDefault(); // Required to tell the browser "dropping is allowed here"
  const id = event.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  event.currentTarget.appendChild(card); // Move the element to the new location
}
```

## How to Practice

If you want to practice writing this code yourself:

1. Clone or download this local repository to your computer.
2. Run the code right after cloning by opening `index.html` in your web browser.
3. See the web page design and understand how it is working.
4. Create your own practice files (like `practice.js` or `practice.html`) in the project folder.
5. Create your own code from scratch without looking at the main code!
