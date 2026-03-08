import { describe, it, expect } from 'vitest';
import { randomNumber, getLocalTime } from '../src/utils';

describe('Utils', () => {
    describe('randomNumber', () => {
        it('should return a number within range', () => {
            for (let i = 0; i < 100; i++) {
                const val = randomNumber(1, 5);
                expect(val).toBeGreaterThanOrEqual(1);
                expect(val).toBeLessThanOrEqual(5);
            }
        });

        it('should handle reversed range', () => {
            const val = randomNumber(10, 1);
            expect(val).toBeGreaterThanOrEqual(1);
            expect(val).toBeLessThanOrEqual(10);
        });
    });

    describe('getLocalTime', () => {
        it('should format time correctly (am)', () => {
            const date = new Date(2023, 0, 1, 9, 5, 30);
            expect(getLocalTime(date)).toBe('09:05:30am');
        });

        it('should format time correctly (pm)', () => {
            const date = new Date(2023, 0, 1, 21, 15, 0);
            expect(getLocalTime(date)).toBe('09:15:00pm');
        });

        it('should handle noon', () => {
            const date = new Date(2023, 0, 1, 12, 0, 0);
            expect(getLocalTime(date)).toBe('12:00:00pm');
        });

        it('should handle midnight', () => {
            const date = new Date(2023, 0, 1, 0, 0, 0);
            expect(getLocalTime(date)).toBe('12:00:00am');
        });
    });
});
