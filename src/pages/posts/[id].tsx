import { withSSRContext } from "aws-amplify";
import { Customer } from "../../models";
import Markdown from "react-markdown";
import { useRouter } from "next/router";

export default function PostComponent({ customer }: any): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Small Change</h2>
      <Markdown>{customer.firstName}</Markdown>
      <Markdown>{customer.lastName}</Markdown>
      <Markdown>{customer.phoneNumber}</Markdown>
      <Markdown>{customer.address}</Markdown>
      <Markdown>{customer.city}</Markdown>
      <Markdown>{customer.state}</Markdown>
    </div>
  );
}

export async function getStaticPaths(req: { req?: any; modules?: any[] | undefined; } | undefined): Promise<any> {
  const { DataStore } = withSSRContext(req);
  const customers = await DataStore.query(Customer);
  const paths = customers.map((customer: { id: any; }) => ({ params: { id: customer.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(req: { req?: any; modules?: any[] | undefined; } | undefined) {
  const { DataStore } = withSSRContext(req);
  const { params } = req?.modules?.[0]?.props?.router ?? { params: { id: "1" } };
  const { id } = params;
  const customer = await DataStore.query(Customer, id);

  return {
    props: {
      customer: JSON.parse(JSON.stringify(customer)),
    },
    revalidate: 1,
  };
}
