import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Image, Span, List, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"stage-7-grid"} />
		<Helmet>
			<title>
				Grid | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"Grid is a group of columns and rows with cells. You can control their number, as well as the grid cells, and move them to the right place. You can also set the distance between columns and rows."} />
			<meta property={"og:title"} content={"Grid | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"Grid is a group of columns and rows with cells. You can control their number, as well as the grid cells, and move them to the right place. You can also set the distance between columns and rows."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeaderMenu />
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
			md-padding="80px 0px 60px 0px"
			quarkly-title="Hero"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="50%"
				color="--light"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				Quarkly Grid
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
			>
				Grid is a group of columns and rows with cells. You can control their number, as well as the grid cells, and move them to the right place. You can also set the distance between columns and rows.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 1. Add Elements">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 1 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-width="100%"
				md-margin="0px 0 16px 0"
				lg-width="100%"
				display="block"
			>
				Place the element we are going to work with. For example
				<Image
					width="24px"
					height="24px"
					vertical-align="top"
					src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
					margin="5px 2px 0px 2px"
				/>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Box
				</Span>
				.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Сhoose
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}and drag and drop it into the workspace.
							</Text>
							<Image width="100%" src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-1-step-1.png?v=2021-07-19T20:08:02.564Z" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						md-margin="0px 0px 0px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								{" "}For
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{"  "}set{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Display
								</Span>
								{" "}to{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grid.
								</Span>
							</Text>
							<Image width="100%" src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-step-1.png?v=2021-07-20T11:11:11.939Z" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							Now, place 6 more Box elements inside this
							<Image
								width="24px"
								height="24px"
								vertical-align="top"
								src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
								margin="0px 2px 0px 2px"
							/>
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Box
							</Span>
							, change their background, and add a frame.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						border-radius="6px"
					>
						Workspace
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Grid template columns">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 2 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid template columns
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				A property defines the number and the width of columns in the grid.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									33.33% 33.33% 33.33%
								</Span>
								{" "}value for grid-template-columns.
							</Text>
							<Image border-radius="4px" max-width="100%" src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-2-step-1.jpg?v=2021-07-20T11:13:18.075Z" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								We've created 3 columns, each one is one-third the parent container width. You can simplify the value with a special unit of measure only used in Grid —{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									fr
								</Span>
								.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								The new fr length unit represents the fraction of available space in the Grid container. In other words, we specify the following value in the grid-template-columns property:{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									1fr 1fr 1fr
								</Span>
								{" "}and get the same result.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid" grid-template-columns="1fr 1fr 1fr">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Grid template rows">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 3 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid template rows
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This works the same way as grid template columns but for rows. That is to say, you can set the height of the rows using this value.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Set the following value for grid-template-rows:
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									repeat(2, 100px)
								</Span>
								.
							</Text>
							<Image border-radius="4px" max-width="100%" src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-3-step-1.png?v=2021-07-20T11:15:37.563Z" />
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								So we set the height to 100px for each of the two rows.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid" grid-template-columns="1fr 1fr 1fr">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid" grid-template-columns="1fr 1fr 1fr" grid-template-rows="repeat(2, 100px)">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Grid gap">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 4 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid gap
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				The Grid gap property sets the indentation between columns and rows.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Set the following value for grid-gap:{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									20px 30px
								</Span>
								.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-4-step-1.png?v=2021-07-20T11:15:50.164Z" border-radius="4px" max-width="100%" />
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								With this value, we set the 20px distance between rows and 30px between columns.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Workspace
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" display="grid" grid-template-columns="1fr 1fr 1fr" grid-template-rows="repeat(2, 100px)">
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						Example
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 5. Grid auto rows">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 5 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid auto rows
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This property sets the size of the lines that can be created in the layout grid container in the future. It affects only those rows whose size isn't explicitly specified.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								To show you how the grid auto rows property works, we'll add three more
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Boxes
								</Span>
								{" \t"}and set the property value to{" "}
								<Span background="--color-greyD1">
									50px
								</Span>
								.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-5-step-1.png?v=2021-07-20T11:18:00.396Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								And since we have only the first two rows set in the Grid template rows, the Grid auto rows property is triggered for the third row, where the value is set to{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									50px
								</Span>
								.{" "}
								<br />
								As we can see, the third row is much smaller than the first two.
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					>
						<Span
							font="--capture"
							letter-spacing="1px"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
						>
							Tip
						</Span>
						<br />
						Use this property when you don't know in advance how many elements will be on the page.
					</Text>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
							grid-auto-rows="50px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 6. Grid auto flow">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 6 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid auto flow
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This property controls the behavior of the elements that will be placed automatically.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								By default, the value is row. This value fills each row in turn and adds new rows as needed. For example, let's set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grid auto flow column
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-6-step-1.png?v=2021-07-20T11:18:23.115Z" border-radius="4px" max-width="100%" />
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								In this case, we've arranged all the elements in two columns, because we've specified{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									repeat(2, 100px)
								</Span>
								{" \t"}for Grid template rows.{"\n\t\t\t\t\t "}
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					>
						<Span
							font="--capture"
							letter-spacing="1px"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
						>
							Tip
						</Span>
						<br />
						There's also a{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							dense
						</Span>
						{" "}value for this property, which allows you to fill elements with free space in the grid. But this can lead to an incorrect order because the elements will line up according to their size instead of location.
					</Text>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
							grid-auto-rows="50px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
							grid-auto-rows="50px"
							grid-auto-flow="column"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 7. Grid auto columns">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 7 OF 7
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid auto columns
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This works the same way as grid auto rows but for columns. That is to say, you can use this value to set the size of the future columns in the layout grid container.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Set grid-auto-columns to the value of{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									150px
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-7-step-1.png?v=2021-07-20T11:18:37.837Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							sm-margin="12px 0px 16px 0px"
						>
							And since we have only the first three columns set in the grid-template-columns, the grid-auto-column property, which has a value of{" "}
							<Span
								background="--color-greyD1"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								150px
							</Span>
							, works for all the others.
							<br />
							<br />
							As you can see, the fourth and subsequent columns are much larger than the first three ones.
						</Text>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					>
						<Span
							font="--capture"
							letter-spacing="1px"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
						>
							Tip
						</Span>
						<br />
						Use this property when you don't know in advance how many blocks will be on the page.
					</Text>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-template-columns="1fr 1fr 1fr"
							grid-template-rows="repeat(2, 100px)"
							grid-gap="20px 30px"
							grid-auto-rows="50px"
							grid-auto-flow="column"
							grid-auto-columns="150px"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-primary" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0px 64px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
			md-padding="80px 0px 60px 0px"
			quarkly-title="Grid elements settings"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				width="100%"
				color="--light"
				lg-width="80%"
				sm-width="100%"
				md-width="100%"
				margin="0px 0px 0px 0px"
			>
				Grid elements settings
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 8. Create a working area">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 1 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Create a working area
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				First, create a grid.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="wrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Box
							width="auto"
							display="flex"
							align-items="flex-start"
							justify-content="flex-start"
							quarkly-title="Item 1"
							flex-wrap="nowrap"
							margin="0px 0px 12px 0px"
							sm-flex-direction="column"
						>
							<Text
								background="--color-indigo"
								font="--base"
								color="--lightD2"
								padding="2px 8px 2px 8px"
								border-radius="33px"
								margin="16px 12px 16px 0px"
								text-align="center"
								flex="0 0 auto"
								min-width="30px"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								sm-margin="12px 12px 0px 0px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							>
								1
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Create a Box-based container. Set the Display Grid, and add nine Box elements inside the container. Set the container to the following values:{" "}
									<Span
										background="--color-greyD1"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Grid gap 10px
									</Span>
									,{" "}
									<Span
										background="--color-greyD1"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Grid auto flow dense
									</Span>
									,{" "}
									<Span
										background="--color-greyD1"
										hyphens="manual"
										overflow-wrap="normal"
										text-indent="0"
										text-overflow="clip"
										white-space="normal"
										word-break="normal"
									>
										Grid template rows repeat(3, 1fr)
									</Span>
									,{" "}
									<Span
										background="--color-greyD1"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Grid template rows repeat(3, 1fr)
									</Span>
									.
								</Text>
								<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-2-step-1.png?v=2021-07-20T11:48:48.325Z" border-radius="4px" max-width="100%" />
							</Box>
						</Box>
						<Box
							width="auto"
							display="flex"
							align-items="flex-start"
							justify-content="flex-start"
							quarkly-title="Item 1"
							flex-wrap="nowrap"
							margin="0px 0px 12px 0px"
							sm-flex-direction="column"
						>
							<Text
								background="--color-indigo"
								font="--base"
								color="--lightD2"
								padding="2px 8px 2px 8px"
								border-radius="33px"
								margin="16px 12px 16px 0px"
								text-align="center"
								flex="0 0 auto"
								min-width="30px"
								border-color="--color-darkL2"
								border-style="solid"
								border-width="1px"
								sm-margin="12px 12px 0px 0px"
								text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							>
								2
							</Text>
							<Box width="100%">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
									sm-margin="12px 0px 16px 0px"
								>
									Add backgrounds for the elements according to the example.
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(3, 1fr)"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-red" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" />
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 9. Order">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 2 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Order
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				When a parent element has a display grid, its nested elements have the Grid Child property group. Let's take a look at the properties of this group. The Order property sets the order of elements in their Grid container.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Let's choose the red element for our example and set its value to{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									-1
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-2-step-2.png?v=2021-07-21T07:36:02.981Z" border-radius="4px" max-width="100%" />
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								And we see the order of the element has changed — it is now first.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(3, 1fr)"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-red" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" />
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(3, 1fr)"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-red"
								align-self="auto"
								justify-self="auto"
								order="-1"
							/>
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" />
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 10. Grid area (Grid column and Grid row)">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 3 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid area (Grid column and Grid row)
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				These properties define the size and location of the element within the Grid container
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Let's select the block where the image of the city is located and set two values for this block:{" "}
							</Text>
							<List margin="0px 0px 16px 0px" font="--base" sm-margin="0px 0px 0px 0px" padding="0px 0px 0px 0px">
								<Text color="--darkL2">
									<Span
										background="--color-greyD1"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Grid column 2 / 4
									</Span>
									{" "}— this value allows you to stretch the image by width, from the place where the image was located (from the second column) to the very edge (to the fourth column).{" "}
								</Text>
								<Text color="--darkL2">
									<Span
										background="--color-greyD1"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Grid row 2 / 4
									</Span>
									{" "}— this value allows you to stretch the image in height, from the second line to the beginning of the fourth one.
								</Text>
							</List>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-3-step-1.png?v=2021-07-20T11:21:24.151Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Both of these properties can be shortened and written as:{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grid area 2 / 2 / 4 / 4
								</Span>
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								In addition to the numbers, you can set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="pre"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									span
								</Span>
								{" "}value that allows you to stretch the element to all available space. For example, set{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="pre"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grid column 2 / span 2
								</Span>
								{" "}for the blue element. And{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grid column 1 / span 4
								</Span>
								{" "}to the black one.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-3-step-2.png?v=2021-07-20T11:21:56.163Z" border-radius="4px" max-width="100%" />
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-3-step-3.png?v=2021-07-20T11:22:18.162Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(3, 1fr)"
							overflow-x="visible"
							grid-auto-flow="dense"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-red" order="-1" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" />
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(4, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-column="2 / span 2" />
							<Box border-width="1px" border-style="solid" background="--color-red" order="-1" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover"
								grid-column="2 / 4"
								grid-row="2 / 4"
							/>
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-column="1 / span 3" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 11. Grid template areas">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 4 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Grid template areas
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				Manage the order of the elements using their name.
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								First, name each element based on its color. The value is written in Grid area, i.e. a block of blue color can be named as{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									blue
								</Span>
								.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-4-step-1.png?v=2021-07-20T11:24:13.662Z" border-radius="4px" max-width="100%" />
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Add names for the other elements:{" "}
								<br />
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									red, yellow, green, image, purple, indigo, grey, dark.
								</Span>
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								And now let's develop a traditional site version using Grid template areas. This is what we're going to have:
							</Text>
							<List margin="0px 0px 16px 0px" font="--base" sm-margin="0px 0px 0px 0px" padding="0px 0px 0px 0px">
								<Text font="--base">
									Blue — header,
								</Text>
								<Text font="--base">
									Dark — footer,
								</Text>
								<Text font="--base">
									Green — sidebar,
								</Text>
								<Text font="--base">
									All other colors will be responsible for the content.
								</Text>
							</List>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								As a result, we have the following value for the grid-template-areas prop of the container:
								<br />
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									'blue blue blue'
									<br />
									'green image purple'
									<br />
									'green indigo grey'
									<br />
									'green yellow red'
									<br />
									'dark dark dark'
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-4-step-2.png?v=2021-07-20T11:24:25.681Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(4, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" />
							<Box border-width="1px" border-style="solid" background="--color-red" order="-1" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" />
							<Box border-width="1px" border-style="solid" background="--color-green" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover"
								grid-column="2 / 4"
								grid-row="2 / 4"
							/>
							<Box border-width="1px" border-style="solid" background="--color-purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" />
							<Box border-width="1px" border-style="solid" background="--color-dark" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(5, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-areas="'blue blue blue' 'green image purple' 'green indigo grey' 'green yellow red' 'dark dark dark'"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-area="blue" />
							<Box border-width="1px" border-style="solid" background="--color-red" grid-area="red" />
							<Box border-width="1px" border-style="solid" background="--color-secondary" grid-area="yellow" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-green"
								grid-area="green"
								justify-self="auto"
								align-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" grid-area="image" />
							<Box border-width="1px" border-style="solid" background="--color-purple" grid-area="purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" grid-area="indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" grid-area="grey" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-area="dark" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 12. Align self">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 5 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Align self
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This property allows you to align an element inside a cell to the axis of a grid-container column
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Align self
								</Span>
								{" "}value to{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									start
								</Span>
								{" "}for the red rectangle for the example in our container
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-5-step-1.png?v=2021-07-20T11:28:06.058Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Now the red rectangle is completely reduced in height based on the minimum height that was set{" "}
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-5-step-2.png?v=2021-07-20T11:28:15.637Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					>
						<Span
							font="--capture"
							letter-spacing="1px"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
						>
							Tip
						</Span>
						<br />
						The following values can also be set for Align self:
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							center
						</Span>
						{" "}—  center alignment,
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							end
						</Span>
						{" "}— bottom edge alignment,
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							stretch
						</Span>
						{" "}— stretches the element to its full height removing the free space,
						<br />
						<Span background="--color-greyD1">
							baseline
						</Span>
						{" "}— aligns to the font baseline. Counts only for text.
					</Text>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(5, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-areas="'blue blue blue' 'green image purple' 'green indigo grey' 'green yellow red' 'dark dark dark'"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-area="blue" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-red"
								grid-area="red"
								justify-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-secondary" grid-area="yellow" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-green"
								grid-area="green"
								justify-self="auto"
								align-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" grid-area="image" />
							<Box border-width="1px" border-style="solid" background="--color-purple" grid-area="purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" grid-area="indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" grid-area="grey" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-area="dark" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(5, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-areas="'blue blue blue' 'green image purple' 'green indigo grey' 'green yellow red' 'dark dark dark'"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-area="blue" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-red"
								grid-area="red"
								align-self="start"
							/>
							<Box border-width="1px" border-style="solid" background="--color-secondary" grid-area="yellow" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-green"
								grid-area="green"
								justify-self="auto"
								align-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" grid-area="image" />
							<Box border-width="1px" border-style="solid" background="--color-purple" grid-area="purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" grid-area="indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" grid-area="grey" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-area="dark" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 13. Justify self">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					STEP 6 OF 6
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Justify self
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				This property allows you to align an element inside a cell to the axis of a grid-container row
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
					md-width="100%"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Let's return our red element to the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Align self auto
								</Span>
								{" "}value and set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Justify self center
								</Span>
								{" "}value for it.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-6-step-1.png?v=2021-07-20T11:28:27.562Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Now the red rectangle is completely narrowed in width based on the minimum width that was set
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/grid-tutorial-1-6-step-2.png?v=2021-07-20T11:28:37.748Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						background="rgba(0, 119, 204, 0.04)"
						padding="8px 14px 16px 14px"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					>
						<Span
							font="--capture"
							letter-spacing="1px"
							color="--grey"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-transform="uppercase"
						>
							Tip
						</Span>
						<br />
						The following values can also be set for Justify self:
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							start
						</Span>
						{" "}—  left alignment,
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							end
						</Span>
						{" "}— right alignment,
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							background="--color-greyD1"
						>
							stretch
						</Span>
						{" "}— stretches the element to its full width removing the free space,
						<br />
						<Span background="--color-greyD1">
							baseline
						</Span>
						{" "}— aligns to the font baseline. Only applicable for text.
					</Text>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(5, 100px)"
							overflow-x="visible"
							grid-auto-flow="dense"
							grid-template-areas="'blue blue blue' 'green image purple' 'green indigo grey' 'green yellow red' 'dark dark dark'"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-area="blue" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-red"
								grid-area="red"
								justify-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-secondary" grid-area="yellow" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-green"
								grid-area="green"
								justify-self="auto"
								align-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" grid-area="image" />
							<Box border-width="1px" border-style="solid" background="--color-purple" grid-area="purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" grid-area="indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" grid-area="grey" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-area="dark" />
						</Box>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="repeat(3, 1fr)"
							grid-template-rows="repeat(5, 100px)"
							grid-auto-flow="dense"
							grid-template-areas="'blue blue blue' 'green image purple' 'green indigo grey' 'green yellow red' 'dark dark dark'"
						>
							<Box border-width="1px" border-style="solid" background="--color-primary" grid-area="blue" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-red"
								grid-area="red"
								justify-self="center"
							/>
							<Box border-width="1px" border-style="solid" background="--color-secondary" grid-area="yellow" />
							<Box
								border-width="1px"
								border-style="solid"
								background="--color-green"
								grid-area="green"
								justify-self="auto"
								align-self="auto"
							/>
							<Box border-width="1px" border-style="solid" background="--color-primary url(https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover" grid-area="image" />
							<Box border-width="1px" border-style="solid" background="--color-purple" grid-area="purple" />
							<Box border-width="1px" border-style="solid" background="--color-indigo" grid-area="indigo" />
							<Box border-width="1px" border-style="solid" background="--color-greyD2" grid-area="grey" />
							<Box border-width="1px" border-style="solid" background="--color-dark" grid-area="dark" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Try It Yourself!">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					SUPERGAME!
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
				lg-width="100%"
			>
				Try it yourself!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				md-margin="0px 0 16px 0"
				md-width="100%"
				lg-width="100%"
			>
				You've just learnt out how the GRID and GRID CHILD group properties work. Ready to practice?{" "}
			</Text>
			<Box display="flex" width="100%" md-flex-direction="column">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					box-sizing="border-box"
					md-width="100%"
					width="33.33%"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
						sm-flex-direction="column"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--light"
							padding="1px 6px 2px 6px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							★
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 18px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 18px 0px"
							>
								Create the structure of a simple page yourself.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
					md-padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-indigo"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						WORKSPACE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
						display="flex"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--light"
						display="inline-block"
						background="--color-grey"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-darkL2"
						border-radius="6px"
						text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
					>
						EXAMPLE
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							display="grid"
							grid-gap="10px"
							grid-template-columns="1fr 1fr 1fr"
							flex-wrap="wrap"
							grid-template-rows="30% 1fr 30%"
							height="auto"
							grid-template-areas="'header header header' 'nav main ad' 'footer footer footer'"
						>
							<Box
								className="header"
								background="#FFF"
								border-radius="8px"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="48px 36px 72px 36px"
								border-width="4px"
								border-style="solid"
								border-color="--color-lightD2"
								as="header"
								grid-area="header"
							>
								<Text font="--headline3" color="--darkL2" text-align="center" margin="0px 0px 0px 0px">
									Header
								</Text>
							</Box>
							<Box
								className="nav"
								background="#FFF"
								border-radius="8px"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="48px 36px 48px 36px"
								border-width="4px"
								border-style="solid"
								border-color="--color-lightD2"
								as="nav"
								grid-area="nav"
							>
								<Text font="--headline3" color="--darkL2" text-align="center" margin="0px 0px 0px 0px">
									Sidebar 1
								</Text>
							</Box>
							<Box
								className="main"
								background="#FFF"
								border-radius="8px"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="48px 36px 48px 36px"
								border-width="4px"
								border-style="solid"
								border-color="--color-lightD2"
								as="main"
								grid-area="main"
							>
								<Text font="--headline3" color="--darkL2" text-align="center" margin="0px 0px 0px 0px">
									Article
								</Text>
							</Box>
							<Box
								className="ad"
								background="#FFF"
								border-radius="8px"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="48px 36px 48px 36px"
								border-width="4px"
								border-style="solid"
								border-color="--color-lightD2"
								grid-area="ad"
							>
								<Text font="--headline3" color="--darkL2" text-align="center" margin="0px 0px 0px 0px">
									Ad
								</Text>
							</Box>
							<Box
								className="footer"
								background="#FFF"
								border-radius="8px"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="48px 36px 72px 36px"
								border-width="4px"
								border-style="solid"
								border-color="--color-lightD2"
								as="footer"
								grid-area="footer"
							>
								<Text font="--headline3" color="--darkL2" text-align="center" margin="0px 0px 0px 0px">
									Footer
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0px 200px 0px"
			sm-padding="40px 0 60px 0"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			background="--color-lightD1"
			md-padding="60px 0px 80px 0px"
			quarkly-title="Congrats!"
		>
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px 0"
					text-transform="uppercase"
					color="white"
					letter-spacing="1px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
					padding="0px 0px 4px 0px"
					position="relative"
					z-index="1"
				>
					Сongrats
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/brush-stroke.svg?v=2020-10-16T13:20:42.549Z) 0% 0% /100% no-repeat scroll padding-box"
					display="inline-block"
					width="136px"
					height="46px"
					position="absolute"
					top="-8px"
					right="auto"
					bottom="auto"
					left="-29px"
				/>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				sm-font="--headline3"
			>
				You’ve successfully completed the onboarding!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 6px 0"
				width="50%"
				color="--darkL2"
				lg-width="60%"
				md-width="100%"
			>
				Now you can create your own project on the fly! If you want to double-check something or refrech your memory, you can always come back to this guide.
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 24px 0"
				width="50%"
				color="--darkL2"
				lg-width="60%"
				md-width="100%"
			>
				You may need more information. To get it, click on the{" "}
				<Span
					display="inline-block"
					padding="0px 10px 0px 10px"
					background="--color-darkL2"
					color="--light"
					border-radius="20px"
					margin="0px 0px 0px 3px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					sm-margin="0px 3px 0px 3px"
				>
					?
				</Span>
				{" "}button{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					at the bottom left of the screen ↘︎{" "}
				</Em>
				. There, you will find the links to the documentation, community, and video lessons.
			</Text>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6152385329a0a1001e6c901a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});