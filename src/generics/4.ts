type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "John",
    surname: "Doe",
    email: "default@example.com",
    password: "defaultPassword",
  };

  return { ...defaultUser, ...initialValues };
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(updatedUser);

export default createOrUpdateUser;
