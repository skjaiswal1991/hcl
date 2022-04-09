import {getbed_admissions} from './transferpatient';

describe('transfer Patient', () => {
  it('transfer Patient admissions', () => {
      const getbed_admissions = getbed_admissions(1)
      expect(getbed_admissions).toBe(getbed_admissions(1));
  });
});