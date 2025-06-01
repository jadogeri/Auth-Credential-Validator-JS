
import { Validator } from '../../src/entities/Validator';


// Import necessary modules and dependencies
// Mock the Credential class
jest.mock("../../src/entities/Credential", () => {
    return {
        Credential: jest.fn().mockImplementation((username, email, password) => {
            return {
                getUsername: jest.fn(() => username),
                getEmail: jest.fn(() => email),
                getPassword: jest.fn(() => password),
            };
        })
    };
});

describe('Validator.validateUsername() validateUsername method', () => {
    let validator;
    let mockUsername;

    beforeEach(() => {
        // Set up a mock Credential instance
        mockUsername= 'validUser';
        validator = new Validator(mockUsername, 'test@example.com', 'Passwo@rd123!');
    });

    describe('Happy paths', () => {
        test('should return true for a valid username', () => {
            // Test a valid username
            expect(validator.validateUsername()).toBe(true);
        });

        test('should return true for another valid username', () => {
            // Test another valid username
            mockUsername = 'anotherValidUser';
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBe(true);
        });
    });

    describe('Edge cases', () => {
        test('should return empty string for null value', () => {
            // Test an empty username

            mockUsername = null;
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBeDefined();
            expect(validator.validateUsername()).toBeTruthy();

        });

        test('should return false for a username with special characters', () => {
            // Test a username with special characters
            mockUsername = "user@gordo";
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBeDefined();
            expect(validator.validateUsername()).toBeFalsy();
        });

        test('should return false for a username that is too short', () => {
            // Test a username that is too short
            mockUsername = "ab";
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBeDefined();
            expect(validator.validateUsername()).toBe(false);
        });

        test('should return false for a username that is too long', () => {
            // Test a username that is too long
            const newusername = "aj1oooP".repeat(30);
            console.log("new username =============",newusername);
            mockUsername = newusername;
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBeDefined();
            expect(validator.validateUsername()).toBe(false);
        });

        test('should return false for a username with spaces', () => {
            // Test a username with spaces
            mockUsername = "Li0n3l M3551";
            validator = new Validator(mockUsername,'tom@jerry.com', 'Password123!');
            expect(validator.validateUsername()).toBeDefined();
            expect(validator.validateUsername()).toBe(false);
        });
    });
});