import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Image, Span, Icon, List, Button, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsDot } from "react-icons/bs";
import { MdFace } from "react-icons/md";
import { FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"stage-6-flexbox"} />
		<Helmet>
			<title>
				FlexBox | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"CSS Flexbox is a technology for creating advanced, flexible layouts by placing all elements into a line on the page. "} />
			<meta property={"og:title"} content={"FlexBox | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"CSS Flexbox is a technology for creating advanced, flexible layouts by placing all elements into a line on the page. "} />
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
				Quarkly Flexbox
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
				CSS Flexbox is a technology for creating advanced, flexible layouts by placing all elements into a line on the page.{" "}
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
					STEP 1 OF 9
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
				Flexbox
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
				First, let's choose the element we are going to work with and add it to the page. For example, let's take{" "}
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
				{" "}.
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
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								After that,


 add elements to{"  \t\t\t\t\t\t\n                        "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
										margin="0px 2px 0px 2px"
									/>
									Box
								</Span>
								{" "}in the following order:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								lg-margin="20px 0px 0px 0px"
							>
								The first text element —
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
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
									Text
								</Span>
								{"  "}— is going to be the heading, while the second one will be the card description.
							</Text>
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
							Double-click on the text and button elements to change their content according to the example.
						</Text>
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
							4
						</Text>
						<Box>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 16px 0px"
							>
								Let's set the Flex value for the Display property of our{" "}
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
								,
					 Box block.{"\n                     "}
							</Text>
							<Image width="100%" src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-1-step-2.png?v=2021-07-19T20:08:02.543Z" border-radius="4px" />
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
						<Box width="100%" align-items="start" justify-items="center" display="flex">
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 2. Children wrap">
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
					STEP 2 OF 9
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
				Children wrap
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
				You can use this property to arrange elements in one or more lines with moving them. If hyphenation is allowed, you can set the order of the elements.
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
								By default, the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									nowrap
								</Span>
								{" "}value is applied. In this case, the child elements are arranged in a single line.
								<br />
								Let's set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									wrap
								</Span>
								{" "}value as an example.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-2-step-1.png?v=2021-07-19T20:33:03.922Z" border-radius="4px" max-width="100%" />
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
								Now the elements are arranged in several lines.
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						You can also use the{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							wrap-reverse
						</Span>
						{" "}value. This value is similar to{" "}
						<Span background="--color-greyD1">
							wrap
						</Span>
						{" "}but
inverts the order of the elements.
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
						<Box width="100%" align-items="start" justify-items="center" display="flex">
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
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
							align-items="start"
							justify-items="center"
							display="flex"
							flex-wrap="wrap"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 3. Direction">
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
					STEP 3 OF 9
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
				Direction
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
				This property defines the direction of the elements in the Flex container along the main axis.
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
								By default, the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									row
								</Span>
								{" "}value is applied.
								<br />
								This value displays the child elements horizontally, from left to right.
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
								Let's set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									column
								</Span>
								{" "}value for our block. This value displays the child elements vertically, from top to bottom.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-3-step-1.png?v=2021-07-19T20:33:16.144Z" border-radius="4px" max-width="100%" />
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						You can also set the{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							column-reverse
						</Span>
						{" "}and{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							row-reverse
						</Span>
						{" "}values for this property. These properties are similar to column and row, respectively, but invert the order of the elements.
					</Text>
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
						<Box
							width="100%"
							align-items="start"
							justify-items="center"
							display="flex"
							flex-wrap="wrap"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
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
							align-items="start"
							justify-items="center"
							display="flex"
							flex-direction="column"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 4. Justify content">
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
					STEP 4 OF 9
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
				Justify content
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
				This property defines how the space around the child elements will be organized along the perpendicular axis of the Flex container.{" "}
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
								By default, the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									normal
								</Span>
								{" "}value is applied. Let's set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									center
								</Span>
								{" "}value as an example.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-4-step-1.png?v=2021-07-19T20:33:30.890Z" border-radius="4px" max-width="100%" />
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
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
								sm-margin="12px 0px 8px 0px"
							>
								As we see in the example, your content is centered based on the vertical axis
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						The following values are available for{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Justify content
						</Span>
						:
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
							start
						</Span>
						{" "}— elements are placed at the beginning of the line;
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
							end
						</Span>
						{" "}— elements are placed at the end of the line;
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
							space-between
						</Span>
						{" "}— space is evenly distributed between the elements;
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
							space-around
						</Span>
						{" "}— space is evenly distributed around the elements.
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
						<Box
							width="100%"
							justify-items="center"
							display="flex"
							flex-direction="column"
							justify-content="flex-start"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
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
							align-items="start"
							justify-items="center"
							display="flex"
							flex-direction="column"
							justify-content="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 5. Align items">
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
					STEP 5 OF 9
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
				Align items
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
				This property defines how the space around the child elements will be organized along the perpendicular axis of the Flex container.{" "}
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
								By default, the normal value is applied. It aligns the elements to the left side of the browser. Let's set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Align-items="center"
								</Span>
								{" "}prop to the center value as an example.
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-5-step-1.png?v=2021-07-19T20:33:56.428Z" border-radius="4px" max-width="100%" />
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
								As we see in the example, your content is centered based on the vertical axis
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						The following values are available for{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Align content
						</Span>
						:
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
							start
						</Span>
						{" "}— elements are placed at the beginning of the line;
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
							end
						</Span>
						{" "}— elements are placed at the end of the line;
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
							stretch
						</Span>
						{" "}— stretches all elements to their full width.
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
							justify-items="center"
							display="flex"
							flex-direction="column"
							justify-content="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
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
							align-items="center"
							justify-items="center"
							display="flex"
							flex-direction="column"
							justify-content="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 6. Align content">
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
					STEP 6 OF 9
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
				Align content
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
				This property defines how the space between the elements will be organized when wrapping (when children wrap is wrap or wrap-reverse).
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
								To show how this property works, for the workspace set the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									row
								</Span>
								{" "}value for the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Direction
								</Span>
								{" "}prop, the wrap value for the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Children wrap
								</Span>
								{" "}prop, and the space-between for the{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Align content{" "}
								</Span>
								{" "}prop.{"\n                         "}
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-6-step-1.png?v=2021-07-19T20:34:14.435Z" border-radius="4px" max-width="100%" />
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
								In this case, there's free space between the elements. The first row of flex elements is aligned to the top edge of the container, the last row — to the bottom edge.
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						The following values are available for{" "}
						<Span
							background="--color-greyD1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Align content
						</Span>
						:
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
							start
						</Span>
						{" "}— free space after the elements;
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
							center
						</Span>
						{" "}— free space on the transverse axis between the elements;
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
							end
						</Span>
						{" "}— free space before the elements;
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
							stretch
						</Span>
						{" "}— stretches all the elements removing the free space;
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
							space between
						</Span>
						{" "}— space is evenly distributed between the elements;
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
							space around
						</Span>
						{" "}— space is evenly distributed around the elements.
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
							justify-items="center"
							display="flex"
							justify-content="center"
							flex-direction="column"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-content="space-between"
							align-items="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 7. Flex">
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
					STEP 7 OF 9
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
				Flex
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
				When a parent element has a display flex, its nested elements have the Flex Child property group. Using the Flex property, you can resize the element, stretch, or shrink it to fill the available free space.
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
								Select the Button element and set it to{" "}
								<Span
									background="--color-greyD1"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Grow if possible (1 1 0%)
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-7-step-1.png?v=2021-07-19T20:34:30.383Z" border-radius="4px" max-width="100%" />
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
								With this value, the button took all the available space and stretched to the full width of the container.
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						The Flex group properties have priority over the Width and Height properties.
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-content="space-between"
							align-items="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text flex="0 1 auto">
								Into the Wild
							</Text>
							<Text text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button align-self="auto">
								Join
							</Button>
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-content="space-between"
							align-items="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text flex="0 1 auto">
								Into the Wild
							</Text>
							<Text text-align="center" flex="0 1 auto">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button flex="1 1 0%">
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 8. Order">
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
					STEP 8 OF 9
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
				The Order property sets the order of elements in their Flex container
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
								Select the Button element and set its value to
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
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-8-step-1.png?v=2021-07-19T20:40:58.883Z" border-radius="4px" max-width="100%" />
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
								We changed the order of our button — it has become the first element. This way you can change the order by setting the numbers, e.g: 1, 2, 3...
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-content="space-between"
							align-items="center"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text flex="0 1 auto">
								Into the Wild
							</Text>
							<Text text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button flex="1 1 0%">
								Join
							</Button>
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-content="space-between"
							align-items="center"
							align-self="auto"
						>
							<Icon category="md" icon={MdFace} size="64px" />
							<Text>
								Into the Wild
							</Text>
							<Text text-align="center">
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button flex="1 1 0%" order="-1" width="100%">
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" md-padding="60px 0 60px 0" quarkly-title="Step 9. Align self">
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
					STEP 9 OF 9
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
				This property allows you to manage the free space inside the current flex line.
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
								Let's select the third icon as an example and set the end value to the{" "}
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
								{" "}prop
							</Text>
							<Image src="https://uploads.quarkly.io/60db8083aef6e3001ee683bb/images/flex-grid-tutorial-9-step-1.png?v=2021-07-19T20:41:29.587Z" border-radius="4px" max-width="100%" />
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
								Now the icon is aligned to the bottom edge, and the free space is higher.
							</Text>
						</Box>
					</Box>
					<Text
						display="inline-block"
						font="normal 400 14px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						width="auto"
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
							TIP
						</Span>
						<br />
						The following values are available for{" "}
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
						:
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
							start
						</Span>
						{" "}— free space after the element;
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
							center
						</Span>
						{" "}— free space before and after the element;
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
							end
						</Span>
						{" "}— free space before the element;
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
							stretch
						</Span>
						{" "}— stretches the element removing the free space;
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
							baseline
						</Span>
						{" "}— aligns to the font baseline.
						<br />
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-items="center"
						>
							<Icon category="md" icon={MdFace} size="104px" />
							<Icon category="md" icon={MdFace} size="64px" />
							<Icon category="md" icon={MdFace} size="34px" />
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
							justify-items="center"
							display="flex"
							flex-direction="row"
							flex-wrap="wrap"
							justify-content="center"
							align-items="center"
							align-self="auto"
						>
							<Icon category="md" icon={MdFace} size="104px" />
							<Icon category="md" icon={MdFace} size="64px" />
							<Icon category="md" icon={MdFace} size="34px" align-self="flex-end" />
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
				You've just learnt how the Flex and Flex Child group properties work.
Ready to practice?{" "}
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
							min-width="30px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							sm-margin="12px 12px 0px 0px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
							height="30px"
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
								Create a simple card yourself
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
							background="#FFF"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							border-width="4px"
							border-style="solid"
							border-color="--color-lightD2"
							align-self="flex-start"
						>
							<Icon
								category="fa"
								icon={FaTree}
								font="64px sans-serif"
								color="--red"
								margin="0px 0px 12px 0px"
							/>
							<Text font="--headline3" color="--darkL2" text-align="center" margin="24px 0px 0px 0px">
								Woods & Mountains
							</Text>
							<Text font="--base" color="--grey" text-align="center" margin="16px 0px 0px 0px">
								43 places
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0 60px 0" md-padding="60px 0 120px 0" quarkly-title="What's Next?">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px -6px"
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
					WHAT’S NEXT?
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
				color="--darkL2"
				sm-font="--headline3"
			>
				It’s time to move to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 40px 0"
				width="50%"
				color="--darkL2"
				lg-width="80%"
				md-width="100%"
			>
				It’s time to move to the next stage
Congratulations! Now you know how to work with Flex.
Next time, we'll work with CSS Grid.
			</Text>
			<LinkBox
				position="relative"
				display="inline-block"
				margin="0px 0px 0px 0px"
				quarkly-title="Step"
				text-decoration-line="initial"
				href="/stage-7-grid"
			>
				<Text
					font="italic 700 28px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--dark"
					margin="0px 0px 16px 0px"
					position="relative"
					z-index="1"
					sm-font="italic 700 20px/1.2 --fontFamily-sans"
				>
					Stage 7.  Grid →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="121.874px"
					height="47.268px"
					position="absolute"
					top="-4px"
					left="-13px"
					right="auto"
					bottom="auto"
					sm-width="91.874px"
					sm-top="-10px"
				/>
			</LinkBox>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6152385329a0a1001e6c901a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});