<template>
  <Header />
  <Searchbar />
  <NuxtPage />
  <Footer />
</template>

<style>
/* Variables */
:root {
  --max-width: 480px;
  --line-height: 1.6;
  --letter-spacing: 0.01em;
  --max-lines: 6;
  --border-radius: 0.5rem;

  --clr-primary-50:   #d5e5ff;
  --clr-primary-100:  #aaccff;
  --clr-primary-200:  #80b3ff;
  --clr-primary-300:  #5599ff;
  --clr-primary-400:  #2a7fff;
  --clr-primary-500:  #0066ff;
  --clr-primary-600:  #0055d4;
  --clr-primary-700:  #0044aa;
  --clr-primary-800:  #003380;
  --clr-primary-900:  #002255;
  --clr-primary-1000: #00112b;

  --clr-white: #ffffff;
  --clr-white-alt: #f5f5f5;
  --clr-gray-5: #f2f2f2;
  --clr-gray-10: #e6e6e6;
  --clr-gray-20: #cccccc;
  --clr-black: #000000;
  --clr-text-dark: #232323;
  --clr-text-medium: #565454;
  --clr-text-light: #969faf;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  overflow-x: hidden;
}

#__nuxt {
  position: relative;
  margin: auto;
  min-height: 100vh;
  max-width: var(--max-width);
  line-height: var(--line-height);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif;
  letter-spacing: var(--letter-spacing);
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Make content take the whole screen */
main {
  padding: 1rem;
  min-height: 100svh;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Headings styling */
h1, h2, h3, h4 {
  color: var(--clr-text-dark);
}

/* Coloring elements */
p,
button,
time,
aside,
ul,
legend,
small,
figure {
  color: var(--clr-text-medium);
}

/* Remove list styles on ul, ol elements with a list role */
ul:where([role="list"]),
ol:where([role="list"]),
ul:where([role="tab"]) {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Clear links default style */
a {
  color: inherit;
  text-decoration: none;
}

/* Clear button default style */
button {
  background-color: transparent;
  border: none;
  padding: 0;
}

/* Font size for time and captions */
time,
figcaption {
  font-size: 0.8em;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Transition between page nav */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>