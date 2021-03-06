import { gql } from "apollo-server-express";
import { testClient } from "./testSetup";

const { query, mutate } = testClient;

describe("User Methods", () => {
  const user = 1;

  it("Add User", async () => {
    const addUser = gql`
      mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $age: Int!
      ) {
        addUser(
          firstName: $firstName
          lastName: $lastName
          email: $email
          password: $password
          age: $age
        ) {
          firstName
          lastName
          password
          email
          age
        }
      }
    `;
    const user = {
      firstName: "jon",
      lastName: "snow",
      email: "jon@gmail.com",
      password: "123456",
      age: 23,
    };

    const { data } = await mutate({
      mutation: addUser,
      variables: {
        ...user,
      },
    });

    expect(data).toEqual({
      addUser: {
        ...user,
      },
    });
  });

  it("Get User Details", async () => {
    const viewUser = gql`
      query viewUser($id: ID!) {
        viewUser(id: $id) {
<<<<<<< HEAD
          _id

=======
          id
          age
>>>>>>> 81a5248da1f18a3f0f25cc1a0795b4bcc82628ac
          firstName
          lastName
          email
        }
      }
    `;
    const { data } = await query({
      mutation: viewUser,
      variables: {
        id: user,
      },
    });
    expect(data).not.toEqual(null);
    expect(data).not.toEqual(undefined);
  });
  it("Get Users", async () => {
    const getUsers = gql`
      query getUsers {
        getUsers {
<<<<<<< HEAD
          _id
=======
          id
>>>>>>> 81a5248da1f18a3f0f25cc1a0795b4bcc82628ac
          firstName
          lastName
          email
        }
      }
    `;
    const { data } = await query({
      mutation: getUsers,
      variables: {},
    });

    expect(data).not.toEqual(null);
    expect(data).not.toEqual(undefined);
  });
});
