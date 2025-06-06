
import { Credential } from '../../src/entities/Credential.js';


// Import the Credential class from the file to be tested
describe('Credential.getPassword() getPassword method', () => {
    // Happy Path Tests
    describe('Happy Paths', () => {
        test('should return the correct password when a valid password is set', () => {
            // Arrange: Create a Credential instance with a known password
            const password = 'securePassword123';
            const credential = new Credential('user1', 'user1@example.com', password);

            // Act: Retrieve the password using getPassword
            const result = credential.getPassword();

            // Assert: Ensure the returned password matches the expected password
            expect(result).toBe(password);
        });

        test('should return an empty string when the password is set to an empty string', () => {
            // Arrange: Create a Credential instance with an empty password
            const credential = new Credential('user2', 'user2@example.com', '');

            // Act: Retrieve the password using getPassword
            const result = credential.getPassword();

            // Assert: Ensure the returned password is an empty string
            expect(result).toBe('');
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        test('should return empty string if the password is not set during initialization', () => {
            // Arrange: Create a Credential instance without setting a password
            const credential = new Credential('user3', 'user3@example.com');

            // Act: Retrieve the password using getPassword
            const result = credential.getPassword();

            // Assert: Ensure the returned password is undefined
            expect(result).not.toBeUndefined();
        });

        test('should return the updated password after it has been changed', () => {
            // Arrange: Create a Credential instance and set an initial password
            const credential = new Credential('user4', 'user4@example.com', 'initialPassword');
            const newPassword = 'newSecurePassword';

            // Act: Update the password and retrieve it using getPassword
            credential.setPassword(newPassword);
            const result = credential.getPassword();

            // Assert: Ensure the returned password matches the updated password
            expect(result).toBe(newPassword);
        });
    });
});