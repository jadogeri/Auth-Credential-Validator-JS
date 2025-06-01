
import { Validator } from '../../src/entities/Validator.js';

// Import necessary modules and classes
describe('Validator.setPasswordRegex() setPasswordRegex method', () => {
    let validator;
    let mockCredential;

    beforeEach(() => {
        // Mock the Credential class
        mockCredential = {
            getPassword: jest.fn()
        };

        // Create a new Validator instance with mock dependencies
        validator = new Validator('username', 'email@example.com', 'password');
        validator.credential = mockCredential;
    });

    describe('Happy paths', () => {
        it('should update the password regex successfully', () => {
            // Test description: This test checks if the password regex is updated correctly.
            const newPasswordRegex = /^[A-Za-z0-9]{8,}$/; // Example regex for alphanumeric passwords with at least 8 characters

            validator.setPasswordRegex(newPasswordRegex);

            expect(validator.passwordRegex).toBe(newPasswordRegex);
        });

        it('should validate password using the updated regex', () => {
            // Test description: This test ensures that the updated password regex is used for validation.
            const newPasswordRegex = /^[A-Za-z0-9]{8,}$/;
            validator.setPasswordRegex(newPasswordRegex);

            mockCredential.getPassword.mockReturnValue('ValidPass123');

            const isValid = validator.validatePassword();

            expect(isValid).toBe(true);
        });
    });

    describe('Edge cases', () => {
        it('should handle an empty regex pattern', () => {
            // Test description: This test checks the behavior when an empty regex pattern is set.
            const emptyRegex = new RegExp('');

            validator.setPasswordRegex(emptyRegex);

            mockCredential.getPassword.mockReturnValue('anyPassword');

            const isValid = validator.validatePassword();

            expect(isValid).toBe(true); // Any string should match an empty regex
        });

        it('should handle a null regex pattern', () => {
            // Test description: This test checks the behavior when a null regex pattern is set and replaces it with default.
            const nullRegex = null;

            validator.setPasswordRegex(nullRegex);

            expect(validator.getPassword).not.toBe(nullRegex);
        });

        it('should handle a regex pattern that never matches', () => {
            // Test description: This test checks the behavior when a regex pattern that never matches is set.
            const neverMatchRegex = /^$/; // Matches only empty strings

            validator.setPasswordRegex(neverMatchRegex);

            mockCredential.getPassword.mockReturnValue('NonEmptyPassword');

            const isValid = validator.validatePassword();

            expect(isValid).toBe(false);
        });

        it('should revert to default regex if set to undefined', () => {
            // Test description: This test checks if setting the regex to undefined reverts to the default regex.
            validator.setPasswordRegex(undefined);

            expect(validator.passwordRegex).not.toBe(undefined);
        });
    });
});