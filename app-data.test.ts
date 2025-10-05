/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// NOTE: This file assumes a test environment like Jest or Vitest is available,
// providing global functions like `describe`, `it`, and `expect`.

// FIX: Add imports for test functions to resolve TypeScript errors.
import { describe, it, expect } from '@jest/globals';
import { PERSONALITY_TYPES, QUESTIONS } from './app-data.ts';

describe('Data Integrity Checks for app-data.ts', () => {
  it('should have 5 personality types', () => {
    expect(PERSONALITY_TYPES.length).toBe(5);
  });

  it('should have valid properties for all personality types', () => {
    for (const type of PERSONALITY_TYPES) {
      expect(typeof type.id).toBe('string');
      expect(type.id.length).toBeGreaterThan(0);
      expect(typeof type.name).toBe('string');
      expect(type.name.length).toBeGreaterThan(0);
      expect(typeof type.description).toBe('string');
      expect(type.description.length).toBeGreaterThan(0);
    }
  });

  it('should have 5 questions', () => {
    expect(QUESTIONS.length).toBe(5);
  });

  it('should have valid properties for all questions and their choices', () => {
    const personalityTypeIds = PERSONALITY_TYPES.map((p) => p.id);
    const questionIds = new Set<number>();

    for (const question of QUESTIONS) {
      expect(typeof question.id).toBe('number');
      // Check for duplicate question IDs
      expect(questionIds.has(question.id)).toBe(false);
      questionIds.add(question.id);

      expect(typeof question.text).toBe('string');
      expect(question.text.length).toBeGreaterThan(0);
      expect(Array.isArray(question.choices)).toBeTruthy();
      expect(question.choices.length).toBeGreaterThan(1); // Each question should have at least 2 choices

      const choiceIds = new Set<number>();
      for (const choice of question.choices) {
        expect(typeof choice.id).toBe('number');
        // Check for duplicate choice IDs within the same question
        expect(choiceIds.has(choice.id)).toBe(false);
        choiceIds.add(choice.id);

        expect(typeof choice.text).toBe('string');
        expect(choice.text.length).toBeGreaterThan(0);
        expect(typeof choice.targetTypeId).toBe('string');

        // Crucial check: ensure the targetTypeId exists in the personality types
        expect(personalityTypeIds.includes(choice.targetTypeId)).toBeTruthy();
      }
    }
  });
});
