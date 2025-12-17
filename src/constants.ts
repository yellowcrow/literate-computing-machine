export const KeyCode = {
  BACKSPACE: 8,
  ENTER: 13,
} as const;

export const MAX_GUESSES = 6;
export const WORD_LENGTH = 5;

// Define the fixed solution word here
export const SOLUTION = "APPLE";

// Type definitions
export type KeyCodeType = typeof KeyCode[keyof typeof KeyCode]; 