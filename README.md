# Event Bubbling and Related Concepts

This repository demonstrates the key concepts of Event Bubbling in JavaScript, along with related topics like Event Capturing, Stopping Propagation, and Event Delegation. Each concept is presented with a practical use case and working example to enhance learning.

## Structure of the Repository

### Files and Folders:
- `index.html`: Main entry point with navigation buttons to switch between different examples.
- `e1.js`: Understanding Event Bubbling.
- `e2.js`: Identifying problems where Event Bubbling can be utilized for better solutions.
- `e3.js`: Stopping Event Propagation.
- `e4.js`: Difference between Event Bubbling and Event Capturing.
- `e5.js`: Implementing Event Delegation using Event Bubbling.

## Concepts Covered

1. **Understanding Event Bubbling**
   - Explains how events propagate through the DOM hierarchy from the target element to its ancestors.
   - File: `e1.js`

2. **Identifying Problems Solvable by Event Bubbling**
   - Demonstrates how event bubbling can simplify handling events for dynamically added elements.
   - File: `e2.js`

3. **Preventing Event Bubbling**
   - Shows how to stop the event propagation using `event.stopPropagation()`.
   - File: `e3.js`

4. **Event Bubbling vs Event Capturing**
   - Highlights the differences between bubbling and capturing phases of event propagation.
   - File: `e4.js`

5. **Event Delegation**
   - Demonstrates efficient event handling by leveraging event bubbling.
   - File: `e5.js`

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/event-bubbling-concepts.git
   cd event-bubbling-concepts
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

3. Click on the navigation buttons to explore each example.

## Folder Hierarchy
```
.
├── index.html
│── e1.js
│── e2.js
│── e3.js
│── e4.js
│── e5.js
└── README.md
```

