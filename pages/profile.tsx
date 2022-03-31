import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const profileData = await prisma.user.findUnique({
    where: {
      id: "cl1fagc1m0008tbx6ejhnxjv8",
  },
    select: {
      email: true,
      phone: true,
      address: {
        select: {
          street: true,
          city: true,
          state: true,
          zip: true,
        }
      }
    }
  });
  return {props: { profileData}}
};
type Props = {
  profileData: any;
}

// TODO: Create order form
// TODO: Create Account Page for USER
// TODO: Create Account page for Employee (to view orders)
// TODO: Add auth with Google
// TODO: Add payment
// TODO: Add Tests
// TODO: Add Storybook
const Profile: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {console.log(props)}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Profile
