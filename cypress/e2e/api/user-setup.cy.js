import { createTestUser } from '../../support/userApi';

describe('Temporary - User API setup', () => {
  it('should create a test user successfully', () => {
    createTestUser().then((user) => {
      expect(user.email).to.include('qa.ambev.');
      expect(user.password).to.be.a('string').and.not.be.empty;
      expect(user.id).to.be.a('string').and.not.be.empty;
    });
  });
});