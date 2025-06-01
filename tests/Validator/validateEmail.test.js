
import { Validator } from '../../src/entities/Validator.js';

// Import necessary modules and dependencies
// Mock the Credential class
jest.mock("../../src/entities/Credential", () => {
    return {
        Credential: jest.fn().mockImplementation((username, email) => {
            return {
                getEmail: jest.fn(() => email),
            };
        }),
    };
});

describe('Validator.validateEmail() validateEmail method', () => {
    let validator;
    let mockEmail;

    beforeEach(() => {
        // Set up a default email for testing
        mockEmail = 'test@example.com';
        validator = new Validator('testUser', mockEmail, 'Password123!');
    });

    describe('Happy Paths', () => {
        test('should return true for a valid email format', () => {
            // Test a valid email
            expect(validator.validateEmail()).toBe(true);
        });

        test('should return true for another valid email format', () => {
            // Test another valid email
            mockEmail = 'user.name+tag+sorting@example.com';
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(true);
        });
    });

    describe('Edge Cases', () => {
        test('should return false for an email without "@" symbol', () => {
            // Test an email without "@" symbol
            mockEmail = 'invalidemail.com';
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });

        test('should return false for an email without domain', () => {
            // Test an email without domain
            mockEmail = 'user@';
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });

        test('should return false for an email with invalid characters', () => {
            // Test an email with invalid characters
            mockEmail = 'user@exa!mple.com';
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });

        test('should return false for an empty email string', () => {
            // Test an empty email string
            mockEmail = '';
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });

        test('should return false for a null email', () => {
            // Test a null email
            mockEmail = null;
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });

        test('should return false for an undefined email', () => {
            // Test an undefined email
            mockEmail = undefined;
            validator = new Validator('testUser', mockEmail, 'Password123!');
            expect(validator.validateEmail()).toBe(false);
        });
    });
});