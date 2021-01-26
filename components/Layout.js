import Head from "next/head";

export default function Layout({ page, children }) {
	return (
		<>
			<Head>
				<title>{page}</title>
			</Head>
			{children}
		</>
	);
}
