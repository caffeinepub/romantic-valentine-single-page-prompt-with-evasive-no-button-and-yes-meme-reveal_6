# Specification

## Summary
**Goal:** Convert the Valentine proposal experience from a single scrollable page into a four-page flow, and update the “Reasons I Love You” content to exactly 8 interactive animated cards with heart-themed micro-animations.

**Planned changes:**
- Restructure the frontend into four distinct pages/screens: (1) Hero, (2) Reasons I Love You, (3) Proposal, and (4) Final Love Note, preserving the existing romantic theme, floating hearts, smooth animations, and background music behavior across navigation.
- Add clear in-UI navigation between pages: Hero “Start” → Reasons → Proposal → Final Love Note (no requirement to scroll to reach the next part).
- Implement the “Reasons I Love You” page as exactly 8 interactive animated cards, each pre-filled with the provided messages verbatim (including punctuation and ellipses), supporting hover and tap behavior for touch devices.
- Add subtle heart-themed micro-animations that trigger when a Reasons card is hovered/flipped/tapped, keeping performance smooth (including on iPad Chrome).
- Ensure no photo/gallery sections are introduced anywhere in the multi-page experience.

**User-visible outcome:** Visitors experience a guided, multi-page Valentine flow with persistent romantic visuals and music, can navigate step-by-step through the proposal, and can interact with exactly 8 animated “Reasons I Love You” cards that display Abubakar’s messages verbatim with subtle heart effects.
