import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'example@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        if (username === 'user@example.com' && password === '1Password') {
          return Promise.resolve({ id: 1, name: 'User' });
        }

        return Promise.resolve(null);
      },
    }),
  ],
  
});
