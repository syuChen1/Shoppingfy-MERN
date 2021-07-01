import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: 'true',
  },
  {
    name: 'Rio Li',
    email: 'rio@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Russell Chen',
    email: 'russell@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
