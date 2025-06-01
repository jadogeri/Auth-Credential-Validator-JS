import { Validator } from '../../src/entities/Validator';
import { usernameRegex } from '../../src/regex';


// Import necessary modules and dependencies
describe('Validator.setUsernameRegex() setUsernameRegex method', () => {
    let validator;
    let mockCredential;

    beforeEach(() => {
        // Mock the Credential class
        mockCredential = {
            getUsername: jest.fn(),
            getEmail: jest.fn(),
            getPassword: jest.fn(),
            default: jest.fn()
        };

        // Create a new instance of Validator with mock credentials
        validator = new Validator('testUser', 'test@example.com', 'password123');
        validator.credential = mockCredential;
    });

    describe('Happy paths', () => {
        it('should set a new username regex pattern successfully', () => {
            // Test description: This test aims to verify that the setUsernameRegex method correctly sets a new regex pattern for username validation.

            const newUsernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // New regex pattern
            validator.setUsernameRegex(newUsernameRegex);

            expect(validator.usernameRegex).toBe(newUsernameRegex);
        });

        it('should validate username with the new regex pattern', () => {
            // Test description: This test aims to ensure that the new regex pattern set by setUsernameRegex is used for username validation.

            const newUsernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
            validator.setUsernameRegex(newUsernameRegex);

            mockCredential.getUsername.mockReturnValue('validUser123');
            expect(validator.validateUsername()).toBe(true);

            mockCredential.getUsername.mockReturnValue('invalid-user!');
            expect(validator.validateUsername()).toBe(false);
        });
    });

    describe('Edge cases', () => {
        it('should throw an error if the provided regex is not a RegExp object', () => {
            // Test description: This test aims to verify that setUsernameRegex throws a TypeError if the provided argument is not a RegExp object.

            const invalidRegex = 'not-a-regex';

            expect(() => {
                validator.setUsernameRegex(invalidRegex);
            }).toThrow(TypeError);
        });

        it('should handle setting an empty regex pattern', () => {
            // Test description: This test aims to check the behavior of setUsernameRegex when an empty regex pattern is provided.

            const emptyRegex = new RegExp('');
            validator.setUsernameRegex(emptyRegex);

            expect(validator.usernameRegex).toBe(emptyRegex);
        });

        it('should revert to default regex if set to undefined', () => {
            // Test description: This test aims to ensure that if setUsernameRegex is called with undefined, it reverts to the default regex pattern.

            validator.setUsernameRegex(undefined);

            expect(validator.usernameRegex).toBe(usernameRegex);
        });

        it('should revert to default regex if set to null', () => {
            // Test description: This test aims to ensure that if setUsernameRegex is called with null, it reverts to the default regex pattern.

            validator.setUsernameRegex(null);

            expect(validator.usernameRegex).toBe(usernameRegex);
        });
    });
});