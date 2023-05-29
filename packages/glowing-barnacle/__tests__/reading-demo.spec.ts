import { describe, test, expect } from 'vitest';
import { setTimer, shortTest, longTest } from '@tools/testing';

describe('Reading Demo', () => {
  test('Short Test', async () => {
    expect(await setTimer(shortTest)).toBe('done');
  });

  test('Long Test', async () => {
    expect(await setTimer(longTest)).toBe('done');
  });
});
