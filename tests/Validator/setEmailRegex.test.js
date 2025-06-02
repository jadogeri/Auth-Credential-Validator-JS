

import { Validator } from '../../src/entities/Validator.js';
import { emailRegex } from '../../src/regex.js';


// Import necessary modules and dependencies
describe('Validator.setEmailRegex() setEmailRegex method', () => {
    let validator;
    let mockCredential;

    beforeEach(() => {
        // Mock the Credential class
        mockCredential = {
            getEmail: jest.fn(),
            getEmail: jest.fn(),
            getPassword: jest.fn(),
            default: jest.fn()
        };

        // Create a new instance of Validator with mock credentials
        validator = new Validator('testUser', 'test@example.com', 'password123');
        validator.credential = mockCredential;
    });

    describe('Happy paths', () => {
        it('should set a new email regex pattern successfully', () => {
            // Test description: This test aims to verify that the setEmailRegex method correctly sets a new regex pattern for email validation.

            const newEmailRegex = /^[a-zA-Z0-9_]{3,15}$/; // New regex pattern
            validator.setEmailRegex(newEmailRegex);

            expect(validator.emailRegex).toBe(newEmailRegex);
        });

        it('should validate email with the new regex pattern', () => {
            // Test description: This test aims to ensure that the new regex pattern set by setEmailRegex is used for email validation.

            const newEmailRegex = /^[a-zA-Z0-9_]{3,15}$/;
            validator.setEmailRegex(newEmailRegex);

            mockCredential.getEmail.mockReturnValue('validUser123');
            expect(validator.validateEmail()).toBe(true);

            mockCredential.getEmail.mockReturnValue('invalid-user!');
            expect(validator.validateEmail()).toBe(false);
        });
    });

    describe('Edge cases', () => {
        it('should throw an error if the provided regex is not a RegExp object', () => {
            // Test description: This test aims to verify that setEmailRegex throws a TypeError if the provided argument is not a RegExp object.

            const invalidRegex = 'not-a-regex';

            expect(() => {
                validator.setEmailRegex(invalidRegex);
            }).toThrow(TypeError);
        });

        it('should handle setting an empty regex pattern', () => {
            // Test description: This test aims to check the behavior of setEmailRegex when an empty regex pattern is provided.

            const emptyRegex = new RegExp('');
            validator.setEmailRegex(emptyRegex);

            expect(validator.emailRegex).toBe(emptyRegex);
        });

        it('should revert to default regex if set to undefined', () => {
            // Test description: This test aims to ensure that if setEmailRegex is called with undefined, it reverts to the default regex pattern.

            validator.setEmailRegex(undefined);

            expect(validator.emailRegex).toBe(emailRegex);
        });

        it('should revert to default regex if set to null', () => {
            // Test description: This test aims to ensure that if setEmailRegex is called with null, it reverts to the default regex pattern.

            validator.setEmailRegex(null);

            expect(validator.emailRegex).toBe(emailRegex);
        });
    });
});