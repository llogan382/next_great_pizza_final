# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.

To actually create the tables in your database, you now can use the following command of the Prisma CLI:

`npx prisma db push`

`npx prisma studio`


Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:

`npx prisma generate`


adjust your database schema by creating the actual tables in the database. Run the following command:
`npx prisma db push`
