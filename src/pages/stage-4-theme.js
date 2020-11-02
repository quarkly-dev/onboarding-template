import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Span, Image, Em, List, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Theme | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to get to know themes, learn how to ass variables and new breakpoints to it.\n"} />
			<meta property={"og:title"} content={"Theme | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to get to know themes, learn how to ass variables and new breakpoints to it.\n"} />
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
				Theme
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Add variables and breakpoints!
				<br />
				Actually, you already used variables from the theme, you just didn’t realize it.
				<br />
				Let's take a closer look at what they are for and how to use them.
			</Text>
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
				Add a variable to the theme
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
				If you’re going to use a certain color, text style, shadow style, etc. in your project many times, you can add it to your theme.
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									If an element is selected, the right panel will display the properties of this element. If you deselect the element by pressing
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
										ESC
									</Span>
									{" "}, the Theme panel will appear.
								</Text>
								<Text
									display="inline-block"
									font="normal 300 14px/1.5 --fontFamily-sans"
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
										Note
									</Span>
									<br />
									Make sure the right panel isn’t hidden. If it’s hidden, click on the arrow{" "}
									<Image vertical-align="-5px" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-arrow-back.svg?v=2020-10-28T08:40:12.410Z" margin="0px 0px 0px 0px" />
									{" "}icon in the center of the right border of the window.
								</Text>
							</Box>
							<Image
								src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-theme-panel-example.svg?v=2020-10-29T09:53:41.343Z"
								border-radius="4px"
								margin="24px 0px 0px 0px"
								sm-margin="0px 0px 0px 0px"
								object-position="0px 0px"
							/>
						</Box>
					</Box>
					<Box
						width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Click the  icon in the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Color Styles
									</Em>
									{" "}section. Enter the variable name —{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										lightGreen
									</Em>
									{" "}and its value —{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										#8BC34A
									</Em>
									. You can add other variables in the same way.
								</Text>
							</Box>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-theme-new-value.svg?v=2020-10-29T13:39:38.768Z" border-radius="4px" margin="24px 0px 0px 0px" object-position="0px 0px" />
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="50%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="100%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Select the button and, in the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Background Color
									</Em>
									{" "}section, set the variable from the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										theme
									</Em>
									{" "}as the background color{" "}
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
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
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
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="#8BC34A"
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
					Step 2 Of 4
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
				Change the value of a variable
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
				The advantage of using theme variables is that their values can be changed and the changes will be applied wherever the variables are used.
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
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
									Go to the{" "}
									<Em>
										Theme panel
									</Em>
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
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
									Click on the{" "}
									<Em>
										lightGreen
									</Em>
									{" "}variable you created in the previous step to edit its value.
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
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
									Enter a new value —{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										#B2FF59
									</Em>
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
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="#8BC34A"
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
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="#B2FF59"
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
					Step 3 OF 4
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
				Add breakpoints
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
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Breakpoints
				</Em>
				{" "}are the conditions under which additional design options for your project appear. There are three{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					breakpoints
				</Em>
				{" "}in a project by default:
				<br />
				<List margin="0px 0px 20px 0px">
					<Text margin="0px 0px 8px 0px">
						sm (for smartphones){" "}
					</Text>
					<Text margin="0px 0px 8px 0px">
						md (for tablets){" "}
					</Text>
					<Text margin="0px 0px 8px 0px">
						and lg (for laptops).
					</Text>
				</List>
				Each works for its own window width, for example, sm: from 0 to 576px. Let’s add some more{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					breakpoints
				</Em>
				.
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
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 24px 0px"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							1
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 24px 0px"
									width="100%"
									color="--darkL2"
								>
									Go to the Theme panel
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-breakpoints-section.svg?v=2020-11-02T14:52:01.631Z" border-radius="4px" margin="0px 0px 0px 0px" object-position="0px 0px" />
							</Box>
						</Box>
					</Box>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 18px 0px"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 16px 0px"
									width="100%"
									color="--darkL2"
								>
									Find the{" "}
									<Em>
										Breakpoints{" "}
									</Em>
									tab and add a new value. Name it “xs”.
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						width="100%"
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							3
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column" padding="0px 0px 0px 0px">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 18px 0px"
									width="100%"
									color="--darkL2"
								>
									Select the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										max-width
									</Em>
									{" "}type and enter value{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										360
									</Em>
									. This means that the maximum width the breakpoint will work for is 360px.
									<br />
									The element styles at this breakpoint will be displayed on smartphones with the screen width of up to 360px (regardless of PPI).{"\n\n\n\n\n\n"}
								</Text>
								<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-breakpoint-xs.svg?v=2020-10-30T20:08:38.604Z" border-radius="4px" margin="0px 0px 0px 0px" object-position="0px 0px" />
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							4
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
									Select the created breakpoint (xs) and style the card to match the example.
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
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="--color-secondary"
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
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 24px"
							sm-align-items="flex-start"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 18px 0px"
								md-margin="16px 0px 8px 0px"
								sm-text-align="left"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="--color-secondary"
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
					Step 4 Of 4
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
				Add one more breakpoint
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
				In the previous step, you created a breakpoint of the max-width type. Now, let’s add a breakpoint of the min-width type. Such breakpoints are valid from the specified width to infinity.
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
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
									Go to the{" "}
									<Em>
										Theme panel
									</Em>
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							2
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
									Find the{" "}
									<Em>
										Breakpoints
									</Em>
									{" "}section and add a new value. Name it{" "}
									<Em>
										“xl”
									</Em>
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
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
									Select the{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										min-width
									</Em>
									{" "}type and enter value{" "}
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										1366
									</Em>
									. This means that the minimum width the breakpoint will work for is 1366px.
									<br />
									The element styles at this breakpoint will be displayed on desktops with the screen width of 1366px and more.{"\n\n\n"}
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
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							4
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
									Select the created breakpoint (xl) and style the card to match the example.
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
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="--color-secondary"
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
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/100%"
							border-radius="8px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							box-sizing="border-box"
							padding="48px 36px 72px 36px"
							opacity="1"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/120%"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 24px"
							sm-align-items="flex-start"
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
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								xl-font="normal 500 62px/1.2 --fontFamily-googleOpenSansCondensed"
							>
								Into the wild
							</Text>
							<Text
								font="--lead"
								color="--lightD2"
								text-align="center"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 18px 0px"
								md-margin="16px 0px 8px 0px"
								sm-text-align="left"
								xl-font="normal 300 28px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								xl-max-width="720px"
							>
								A wonderful journey into the woods and mountains that will heal your mind, body, and soul. It’ll be a trip to remember
							</Text>
							<Button
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
								background="--color-secondary"
								xl-font="normal 300 24px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								xl-border-radius="36px"
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
				width="66.66%"
				color="--darkL2"
				sm-width="100%"
				md-width="100%"
				lg-width="100%"
			>
				You’ve worked through how to use variables and breakpoints from the theme. How about practicing a little  now?
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
							padding="2px 8px 2px 8px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
							border-color="--color-darkL2"
							border-style="solid"
							border-width="1px"
							text-shadow="0 1px 1px rgba(25, 30, 34, 0.3)"
						>
							★
						</Text>
						<Box width="100%" display="flex" sm-flex-direction="column">
							<Box width="50%" padding="0px 24px 0px 0px">
								<Text
									display="block"
									font="--base"
									margin="20px 0px 0px 0px"
									width="100%"
									color="--darkL2"
								>
									Build a card by creating and using variables from the theme. Don't forget to style the existing breakpoints.
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
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Box position="relative" display="inline-block" margin="0px 0px 0px 21px" quarkly-title="Step">
				<Text
					as="p"
					font="--capture"
					margin="0 0 20px -10px"
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
					What’s next?
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
				Move to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="66.66%"
				color="--darkL2"
			>
				You did a great job with the themes in Quarkly. In the next stage, you'll learn:{" "}
			</Text>
			<List margin="0px 0px 16px 0px" font="--base">
				<Text color="--darkL2">
					How to open the code editor
				</Text>
				<Text color="--darkL2">
					How to add props and elements
				</Text>
				<Text color="--darkL2">
					How to use search and replacement options
				</Text>
				<Text color="--darkL2">
					How to call the option window
				</Text>
			</List>
			<Box position="relative" display="inline-block" margin="48px 0px 0px 0px" quarkly-title="Step">
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
				>
					Stage 5. Code Editor →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="125.874px"
					height="47.268px"
					position="absolute"
					top="-4px"
					left="-13px"
					right="auto"
					bottom="auto"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});