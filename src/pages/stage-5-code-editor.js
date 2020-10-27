import React from "react";
import theme from "theme";
import { Theme, Text, Box, List, Span, Image, Icon, Button, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaTree, FaCanadianMapleLeaf } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Code Editor | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn the basics of working in the code editor."} />
			<meta property={"og:title"} content={"Code Editor | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn the basics of working in the code editor."} />
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
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="66.66%"
				color="--light"
			>
				Code Editor
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				The page and code in the code editor are synchronized. Each element of the page is represented by a props tag. Let's take a closer look at the features of the code editor.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 32px 0px 0px"
					margin="0px 0px 16px 0px"
					width="50%"
					box-sizing="border-box"
				>
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
						color="--darkL2"
					>
						Pages set free
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0px 0 30px 0"
						width="100%"
						color="--darkL2"
					>
						Drag the page wherever you want!
					</Text>
				</List>
				<Box
					width="50%"
					text-align="center"
					position="relative"
					padding="98px 0px 0px 24px"
					box-sizing="border-box"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
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
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="18px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Hold down the
								<Span
									min-width="18px"
									border-color="--color-lightD2"
									border-radius="4px"
									border-width="2px"
									border-style="solid"
									padding="2px 5px 2px 5px"
									box-shadow="0px 1px 0 1px --color-lightD2"
									display="inline-block"
									text-align="center"
									font="--capture"
									color="--greyD2"
									text-transform="uppercase"
									letter-spacing="1px"
									margin="0px 3px 0px 3px"
								>
									SPACE
								</Span>
								{" "}key and the left mouse button
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
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="18px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Use the mouse to move the page
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
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="18px 0px 16px 0px"
							width="100%"
							color="--darkL2"
							text-align="left"
						>
							If you use touchpad, move the page by placing two fingers on the touchpad and sliding{"  "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
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
					STEP 1 OF 4
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
			>
				Open the editor
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				All page elements are represented in the code editor. Let's see how this page looks like.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							1
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Click the{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-code-editor.svg?v=2020-10-24T19:03:09.997Z" margin="0px 0px 0px 0px" />
									{" "}button in the top left corner of the top bar.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.7 --fontFamily-sans"
									margin="18px 0px 6px 0px"
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
									You can also open the editor by pressing the following shortcuts:
									<br />
									Mac:
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										background="white"
									>
										⌘
									</Span>
									+
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										background="white"
									>
										2
									</Span>
									, 
						Windows:
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										background="white"
									>
										ctrl
									</Span>
									+
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										background="white"
									>
										2
									</Span>
								</Text>
							</Box>
							<Image
								width="100%"
								src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg"
								border-radius="4px"
								margin="24px 0px 0px 0px"
								sm-margin="0px 0px 0px 0px"
								object-position="0px 0px"
								height="200px"
							/>
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							2
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Choose any element on the page or in the code editor. Note that the selection is done simultaneously both on the page and in the code editor.
								</Text>
							</Box>
							<Image
								width="100%"
								src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg"
								border-radius="4px"
								margin="24px 0px 0px 0px"
								object-position="0px 0px"
							/>
						</Box>
					</Box>
				</List>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
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
					STEP 2 OF 4
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
			>
				Add an element and props
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				In the code editor, you can add elements and set their properties just like on a page. Let's try to add a new element to the card
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							1
						</Text>
						<Box width="50%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select an icon in the card
								</Text>
							</Box>
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
						sm-margin="0px 0px 18px 0px"
					>
						{"    "}
						<Text
							background="--color-indigo"
							font="--base"
							color="--lightD2"
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							{"        "}2{"\n    "}
						</Text>
						{"    "}
						<Box width="50%" display="flex" sm-flex-direction="column">
							{"        "}
							<Box width="100%" padding="0px 24px 0px 0px">
								{"            "}
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									{"                "}To add a new element, enter the following code under the icon in the code editor:{"\n            "}
								</Text>
								{"            "}
								<Text
									display="block"
									font="normal 300 18px/1.5 --fontFamily-mono"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									&lt;Text&gt;Trips&lt;/Text&gt;{"\n            "}
								</Text>
								{"            "}
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									{"                "}Use the following shortcuts to save the code:{"\n                "}
									<br />
									{"                "}Mac:{" \n                "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"                    "}
										<Span
											min-width="18px"
											border-color="--color-lightD2"
											border-radius="4px"
											border-width="2px"
											border-style="solid"
											padding="2px 5px 2px 5px"
											box-shadow="0px 1px 0 1px --color-lightD2"
											display="inline-block"
											text-align="center"
											font="--capture"
											color="--greyD2"
											text-transform="uppercase"
											letter-spacing="1px"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
											margin="0px 0px 0px 3px"
										>
											{"                        "}⌘{"\n                    "}
										</Span>
										{"                "}
									</Span>
									{"                    \n                "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 3px 0px 0px"
									>
										{"                    "}s{"\n                "}
									</Span>
									{"                 "}, Windows:{" \n                "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 0px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"                    "}Ctrl{"\n                "}
									</Span>
									{"                    \n                "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"                    "}s{"\n                "}
									</Span>
									{"            "}
								</Text>
								{"        "}
							</Box>
							{"    "}
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							3
						</Text>
						<Box width="50%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									After the element appears, add some properties to it:
								</Text>
								<Text
									display="block"
									font="normal 300 18px/1.5 --fontFamily-mono"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									&lt;Text&gt;
									<br />
									Trips
									<br />
									&lt;/Text&gt;
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
					>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
							margin="0px 0px 0px 0px"
						>
							<Icon
								category="fa"
								icon={FaTree}
								font="64px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
							/>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
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
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 0px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="64px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaTree}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
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
					STEP 3 OF 4
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
			>
				Find and replace
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				It’s very convenient to work with elements and properties in the code editor: you can change, delete, move, duplicate, and paste elements into other elements. Let’s try to do it
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							1
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select an icon in the first card
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							2
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select the following line:
								</Text>
								<Text
									display="block"
									font="normal 300 18px/1.5 --fontFamily-mono"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									font="52px sans-serif"
								</Text>
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Now, search and replace it. To do that, click the following shortcuts:
									<br />
									Mac:{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Span
											min-width="18px"
											border-color="--color-lightD2"
											border-radius="4px"
											border-width="2px"
											border-style="solid"
											padding="2px 5px 2px 5px"
											box-shadow="0px 1px 0 1px --color-lightD2"
											display="inline-block"
											text-align="center"
											font="--capture"
											color="--greyD2"
											text-transform="uppercase"
											letter-spacing="1px"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
											margin="0px 0px 0px 3px"
										>
											⌘
										</Span>
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 3px 0px 0px"
									>
										f
									</Span>
									{" "}, Windows:{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 0px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Ctrl
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										f
									</Span>
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							3
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									In the window that will appear, open the second field clicking on the arrow &gt;. And in the Replace field, enter:
								</Text>
								<Text
									display="block"
									font="normal 300 18px/1.5 --fontFamily-mono"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									font="72px sans-serif"
								</Text>
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Click on the{" "}
									<Em>
										Replace All
									</Em>
									{" "}button.
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							4
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Save the code to see the result.
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
					>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								{" \n            "}INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								{" \n            "}INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 0px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="52px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								{" \n            "}INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
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
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="74px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="74px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 0px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="74px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
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
					STEP 4 OF 4
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
			>
				Cut and paste
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				Sometimes, you may find it convenient to move a component or a group of component from one place to another. The cut and paste commands can be used for this purposes.
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 0px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							1
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Choose an icon
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 0px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							2
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select the following lines:
								</Text>
								<Text
									display="block"
									font="normal 300 18px/1 --fontFamily-mono"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									&lt;Icon
									<br />
									<br />
									{"            "}font="52px sans-serif"
									<br />
									<br />
									{"            "}color="--light"
									<br />
									<br />
									{"            "}md-font="54px sans-serif"
									<br />
									<br />
									{"            "}sm-font="36px sans-serif"
									<br />
									<br />
									{"            "}category="fa"
									<br />
									<br />
									{"            "}icon="FaCanadianMapleLeaf"
									<br />
									<br />
									{"          "}/&gt;
								</Text>
								<Text
									display="block"
									font="--base"
									margin="18px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Cut the element using the shortcuts:
									<br />
									Mac:{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Span
											min-width="18px"
											border-color="--color-lightD2"
											border-radius="4px"
											border-width="2px"
											border-style="solid"
											padding="2px 5px 2px 5px"
											box-shadow="0px 1px 0 1px --color-lightD2"
											display="inline-block"
											text-align="center"
											font="--capture"
											color="--greyD2"
											text-transform="uppercase"
											letter-spacing="1px"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
											margin="0px 0px 0px 3px"
										>
											⌘
										</Span>
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 3px 0px 0px"
									>
										x
									</Span>
									{" "}, Windows:{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 0px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Ctrl
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										x
									</Span>
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="20px 0px 16px 0px"
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
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										You can see all the options right-clicking on the code editor and selecting Command Palette.
									</Span>
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 0px 0px"
						sm-flex-direction="column"
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							3
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select the Trips element and insert the cut icon in the code below it.
									<br />
									{" "}The shortcuts are: Mac:{" "}
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										<Span
											min-width="18px"
											border-color="--color-lightD2"
											border-radius="4px"
											border-width="2px"
											border-style="solid"
											padding="2px 5px 2px 5px"
											box-shadow="0px 1px 0 1px --color-lightD2"
											display="inline-block"
											text-align="center"
											font="--capture"
											color="--greyD2"
											text-transform="uppercase"
											letter-spacing="1px"
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
											margin="0px 0px 0px 3px"
										>
											⌘
										</Span>
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 3px 0px 0px"
									>
										v
									</Span>
									{" "}, Windows:{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 0px 0px 3px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Ctrl
									</Span>
									{" "}
									<Span
										min-width="18px"
										border-color="--color-lightD2"
										border-radius="4px"
										border-width="2px"
										border-style="solid"
										padding="2px 5px 2px 5px"
										box-shadow="0px 1px 0 1px --color-lightD2"
										display="inline-block"
										text-align="center"
										font="--capture"
										color="--greyD2"
										text-transform="uppercase"
										letter-spacing="1px"
										margin="0px 3px 0px 0px"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										v
									</Span>
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
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
							min-width="12px"
							sm-margin="16px 12px 0px 0px"
						>
							4
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Save the code to see the result.
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
					>
						<Box
							width="100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Icon
								font="74px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 16px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
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
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							margin="0px 32px 0px 0px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
						>
							<Text
								color="--light"
								text-align="center"
								margin="16px 0px 16px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
							>
								Trips
							</Text>
							<Icon
								font="74px sans-serif"
								color="--light"
								md-font="54px sans-serif"
								sm-font="36px sans-serif"
								category="fa"
								icon={FaCanadianMapleLeaf}
							/>
							<Text
								font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
								md-font="normal 500 36px/1.2 --fontFamily-googleOpenSansCondensed"
								sm-font="normal 500 24px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								INTO THE WILD
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								max-width="540px"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								md-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 12px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-padding="12px 18px 12px 18px"
							>
								Join
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
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
			>
				Try it yourself!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				You’ve worked through on how to use the code editor. What about a little practice now?
			</Text>
			<Box display="flex" flex-direction="column" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="80%"
					box-sizing="border-box"
					lg-width="100%"
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
						sm-margin="0px 0px 18px 0px"
					>
						<Text
							background="--color-indigo"
							font="--base"
							color="--light"
							padding="2px 6px 2px 6px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							★
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 24px 0px"
									width="100%"
									color="--darkL2"
								>
									Build a card using only the code editor. Try to type but not copy the code from the example. This will help you learn it better and get the hang of working with the code editor.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
									margin="0px 0px 16px 0px"
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
									<Span
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Select the elements from the example and check out their styles.{" "}
									</Span>
								</Text>
							</Box>
						</Box>
					</Box>
				</List>
				<Box
					width="100%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
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
					/>
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0px 200px 0px"
			sm-padding="40px 0"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			background="--color-lightD1"
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
			>
				You’ve successfully completed the onboarding!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 24px 0"
				width="50%"
				color="--darkL2"
			>
				Now, you can create your project on the fly! If you want to remember something, you can always come back to this guide.
			</Text>
		</Section>
	</Theme>;
});