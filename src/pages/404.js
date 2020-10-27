import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu />
		<Box
			min-height="500px"
			display="flex"
			flex-direction="column"
			align-items="center"
			justify-content="center"
			color="--light"
			position="absolute"
			left="0px"
			right="0px"
			bottom="0px"
			top="100px"
		>
			<Text font="--headline1">
				404
			</Text>
			<Text margin="0px 0px 54px 0px" font="--lead">
				Page Not Found
			</Text>
			<Link
				padding="8px 24px 8px 24px"
				background="--color-primary"
				color="--light"
				text-decoration-line="initial"
				font="--base"
				href="/"
				border-radius="26px"
			>
				Go Home
			</Link>
		</Box>
	</Theme>;
});