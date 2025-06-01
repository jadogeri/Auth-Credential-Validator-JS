
import { Validator } from '../../src/entities/Validator.js';
import { passwordRegex } from '../../src/regex';


// Import necessary modules and dependencies
// Mock the Credential class to control the behavior of getPassword
jest.mock("../../src/entities/Credential", () => {
  return {
    Credential: jest.fn().mockImplementation((username, email, password) => {
      return {
        getPassword: jest.fn(() => password),
      };
    }),
  };
});

describe('Validator.validatePassword() validatePassword method', () => {
  let validator;
  let mockPassword;

  beforeEach(() => {
    // Set up a default password regex for testing
    mockPassword = 'Password1@';
    validator = new Validator('username', 'email@example.com', mockPassword);
    validator.setPasswordRegex(passwordRegex);
  });

  describe('Happy Paths', () => {
    test('should return true for a valid password', () => {
      // Test a valid password that matches the regex
      expect(validator.validatePassword()).toBe(true);
    });

    test('should return true for another valid password', () => {
      // Test another valid password
      mockPassword = 'Another$Valid1';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    test('should return false for a password that is too short', () => {
      // Test a password that is too short
      mockPassword = 'Short1!';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for a password without numbers', () => {
      // Test a password without numbers
      mockPassword = 'NoNumbers!';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for a password without special characters', () => {
      // Test a password without special characters
      mockPassword = 'NoSpecial123';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for a password without uppercase letters', () => {
      // Test a password without uppercase letters
      mockPassword = 'nouppercase123!';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for a password without lowercase letters', () => {
      // Test a password without lowercase letters
      mockPassword = 'NOLOWERCASE123!';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for an empty password', () => {
      // Test an empty password
      mockPassword = '';
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for a null password', () => {
      // Test a null password
      mockPassword = null;
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });

    test('should return false for an undefined password', () => {
      // Test an undefined password
      mockPassword = undefined;
      validator = new Validator('username', 'email@example.com', mockPassword);
      expect(validator.validatePassword()).toBe(false);
    });
  });
});