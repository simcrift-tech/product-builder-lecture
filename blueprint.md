# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. It provides a user-friendly interface for generating and displaying a set of 6 unique numbers between 1 and 45.

## Design and Features

*   **UI Design:** The application will have a clean and modern design with a title, a button to generate numbers, and a display area for the results.
*   **Visual Style:**
    *   **Fonts:** Expressive typography will be used to create a clear visual hierarchy.
    *   **Color Palette:** A vibrant and energetic color scheme will be used.
    *   **Effects:** Subtle shadows and gradients will be used to give a premium feel.
*   **Interactivity:** The "Generate" button will have a clear interactive state.
*   **Functionality:**
    *   Clicking the "Generate" button will produce 6 unique random numbers from 1 to 45.
    *   The generated numbers will be displayed in a visually appealing way.

## Current Plan

### Phase 2: Professional Polish & 3D Visuals

*   **Step 4: Integrate Three.js**
    *   Add Three.js library.
    *   Create a 3D scene with a rotating lottery drum or bouncing balls to represent the generation process.
*   **Step 5: Modernize Styles with Baseline CSS**
    *   Replace hex/HSL with `oklch()` for more vibrant colors.
    *   Add a subtle noise texture to the background for a premium feel.
    *   Implement multi-layered "lifted" shadows for the cards.
    *   Use Container Queries to ensure the lotto machine looks great in any layout.
*   **Step 6: Refactor to Web Components**
    *   Create a `<lotto-machine>` custom element to encapsulate the logic and styles.
*   **Step 7: Enhanced Interactivity**
    *   Add "glow" effects to the generate button.
    *   Implement a staggered animation for the numbers as they appear.
