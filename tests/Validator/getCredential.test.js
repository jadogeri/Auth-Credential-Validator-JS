
import { Credential } from '../../src/entities/Credential.js';
import { Validator } from '../../src/entities/Validator.js';


// Import necessary modules and classes
// Mock the Credential class
jest.mock("../../src/entities/Credential");

describe('Validator.getCredential() getCredential method', () => {
    let mockCredentialInstance;

    beforeEach(() => {
        // Set up a mock instance of Credential
        mockCredentialInstance = {
            getUsername: jest.fn(),
            getEmail: jest.fn(),
            getPassword: jest.fn(),
        };

        // Mock the Credential constructor to return the mock instance
        Credential.mockImplementation(() => mockCredentialInstance);
    });

    describe('Happy Paths', () => {
        it('should return the credential object when getCredential is called', () => {
            // Arrange: Create a Validator instance
            const validator = new Validator('testUser', 'test@example.com', 'Password123');

            // Act: Call getCredential
            const credential = validator.getCredential();

            // Assert: Check if the returned object is the mockCredentialInstance
            expect(credential).toBe(mockCredentialInstance);
        });
    });

    describe('Edge Cases', () => {
        it('should handle the case when no username, email, or password is provided', () => {
            // Arrange: Create a Validator instance with empty strings
            const validator = new Validator('', '', '');

            // Act: Call getCredential
            const credential = validator.getCredential();

            // Assert: Check if the returned object is the mockCredentialInstance
            expect(credential).toBe(mockCredentialInstance);
        });

        it('should handle the case when null values are provided', () => {
            // Arrange: Create a Validator instance with null values
            const validator = new Validator(null, null, null);

            // Act: Call getCredential
            const credential = validator.getCredential();

            // Assert: Check if the returned object is the mockCredentialInstance
            expect(credential).toBe(mockCredentialInstance);
        });

        it('should handle the case when undefined values are provided', () => {
            // Arrange: Create a Validator instance with undefined values
            const validator = new Validator(undefined, undefined, undefined);

            // Act: Call getCredential
            const credential = validator.getCredential();

            // Assert: Check if the returned object is the mockCredentialInstance
            expect(credential).toBe(mockCredentialInstance);
        });
    });
});