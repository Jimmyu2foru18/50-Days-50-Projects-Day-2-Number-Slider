# Day 2 - Progress Steps

## Project Description
A clean and interactive progress steps component that shows the user's progress through a sequence of steps. Features numbered circles (1-4) connected by lines, with both visual feedback and smooth transitions as users navigate through the steps.

## Features
- Numbered steps from 1 to 4
- Interactive navigation with Previous and Next buttons
- Visual progress indicator with connecting lines
- Smooth transitions and animations
- Disabled button states at start/end points

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

## Key Concepts
- DOM Manipulation
- CSS Transitions
- Event Listeners
- Disabled Button States
- Progress Tracking

## Visual Elements
1. **Circles**
   - Grey circles with numbers (default state)
   - Blue circles for active/completed steps
   - Smooth color transition effects

2. **Progress Line**
   - Grey background line connecting all circles
   - Blue progress line that fills as steps advance
   - Animated width transitions

3. **Navigation Buttons**
   - Previous and Next buttons
   - Disabled states when at start/end
   - Hover and click effects

## Code Structure 
```bash
Day 2 - Number Slider/
├── index.html
├── styles.css
└── script.js
```

## How to Use
1. Clone the repository
2. Open `index.html` in your browser
3. Click 'Next' to advance through the steps
4. Click 'Prev' to go back to previous steps

## JavaScript Functions
- `update()`: Updates the UI based on the current active step
- Event listeners for 'Next' and 'Prev' buttons
- Progress calculation and button state management

## CSS Features
- Flexbox for layout
- CSS transitions for smooth animations
- Custom button styling
- Responsive design

## Credits
Part of the "50 Projects in 50 Days" challenge
