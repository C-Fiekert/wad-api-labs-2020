import userModel from '../api/users/userModel';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
    'favourites': [
      {
      'id': 111,
      'title': 'Jaws'
      }
    ]
  },
  {
    'username': 'user2',
    'password': 'test2',
    'favourites': [
      {
      'id': 112,
      'title': 'Green Mile'
      }
    ]
  },
  {
    'username': 'user3',
    'password': 'test3',
    'favourites': [
      {
      'id': 113,
      'title': 'Forest Gump'
      }
    ]
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }