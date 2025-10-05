/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// NOTE: This file assumes a test environment like Jest or Vitest is available,
// providing global functions like `describe`, `it`, and `expect`.

// FIX: Add imports for test functions to resolve TypeScript errors.
import { describe, it, expect } from '@jest/globals';
import { calculateResult } from './utils.ts';

describe('Utility Functions: calculateResult', () => {
  it('should return the most frequent typeId', () => {
    const answers = [
      'innovator',
      'guardian',
      'innovator',
      'analyst',
      'innovator',
    ];
    const result = calculateResult(answers);
    expect(result).toBe('innovator');
  });

  it('should handle a tie by returning the alphabetically first typeId', () => {
    // 'artist' and 'guardian' both appear twice.
    // 'artist' comes before 'guardian' alphabetically.
    const answers = ['guardian', 'guardian', 'artist', 'artist', 'innovator'];
    const result = calculateResult(answers);
    expect(result).toBe('artist');
  });

  it('should return null for an empty array of answers', () => {
    const answers: string[] = [];
    const result = calculateResult(answers);
    expect(result).toBe(null);
  });

  it('should return the single type if there is only one answer', () => {
    const answers = ['analyst'];
    expect(calculateResult(answers)).toBe('analyst');
  });

  it('should handle all unique answers by returning the alphabetically first one', () => {
    const answers = ['guardian', 'innovator', 'analyst'];
    // 'analyst' is the first alphabetically.
    expect(calculateResult(answers)).toBe('analyst');
  });
});
