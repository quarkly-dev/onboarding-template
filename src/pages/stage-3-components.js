import React from "react";
import theme from "theme";
import { Theme, Text, Box, Span, Image, List, Icon, Button, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaTree } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Components | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you're going to learn how to create custom components, update and detach them, and reset changes.\n"} />
			<meta property={"og:title"} content={"Components | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you're going to learn how to create custom components, update and detach them, and reset changes.\n"} />
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
				Components
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				To speed up your workflow and make it seamless, you can convert a group of elements into a component. In addition, this approach reduces the code and makes the project clearer
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
					STEP 1 OF 5
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
				Convert a card into a component
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
				If an element is repeated in the project, you can convert it into a component, duplicate and change its content
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
									Select the card container, right-click and select “Create Component”.
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
									You can convert only one element that can contain other elements.
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
									Duplicate the created component twice. To do this, right-click on the component and select “Duplicate” from the context menu.
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
										Tip
									</Span>
									<br />
									You can also duplicate elements using the shortcut
									<br />
									Mac:{" "}
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
										⇧
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
										d
									</Span>
									, Windows:{" "}
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
										shift
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
										d
									</Span>
									.
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
									Add the 32px right indent to the first two components
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
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
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
						ПРИМЕР
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
						<Components.CardExample margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExample>
						<Components.CardExample margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExample>
						<Components.CardExample>
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExample>
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
					STEP 2 OF 5
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
				Change component styles
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
				You can change the styles and content of each component, and the structure will be preserved
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
									Style the second and third components as in the example. Leave the first component unchanged.
									<br />
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
						<Components.CardWorkStep2 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
						<Components.CardWorkStep2 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
						<Components.CardWorkStep2>
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep2>
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
						<Components.CardExampleStep2 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep2>
						<Components.CardExampleStep2 margin="0px 32px 0px 0px" border-radius="36px">
							<Override slot="text" font="normal 500 36px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 300 22px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardExampleStep2>
						<Components.CardExampleStep2 border-radius="24px">
							<Override slot="text" font="normal 700 38px/1.2 --fontFamily-sans" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 300 24px/1.5 --fontFamily-googleOpenSansCondensed">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="48px sans-serif" />
						</Components.CardExampleStep2>
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
					STEP 3 OF 5
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
				Push All to Master
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
				If you want to change the design of all copies of components, you can style one and use the Push All to Master option.
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
									Select the last component that you styled at the previous step. Click on the “3 dots” icon next to the component name. Choose “Push All to Master” in the drop-down menu.
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
						<Components.CardWorkStep3 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								Join
							</Override>
						</Components.CardWorkStep3>
						<Components.CardWorkStep3 margin="0px 32px 0px 0px" border-radius="36px">
							<Override slot="text" font="normal 500 36px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 300 22px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardWorkStep3>
						<Components.CardWorkStep3 border-radius="24px">
							<Override slot="text" font="normal 700 38px/1.2 --fontFamily-sans" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 300 24px/1.5 --fontFamily-googleOpenSansCondensed">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="48px sans-serif" />
						</Components.CardWorkStep3>
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
						<Components.CardExampleStep3 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExampleStep3>
						<Components.CardExampleStep3 margin="0px 32px 0px 0px" border-radius="36px">
							<Override slot="text" font="normal 500 36px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 300 22px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardExampleStep3>
						<Components.CardExampleStep3>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="button">
								JOIN
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExampleStep3>
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
					STEP 4 OF 5
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
				Reset All Overrides
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
				If you want to reset component changes to default, use the{" "}
				<Em>
					Reset All Overrides
				</Em>
				{" "}option
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
									Choose the second component that you styled. Click on the “3 dots” icon. Select{" "}
									<Em>
										the Reset All Overrides
									</Em>
									{" "}option in the drop-down menu.
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
						<Components.CardWorkStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								Join
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px">
							<Override slot="text" font="normal 500 36px/1.2 --fontFamily-mono" text-transform="uppercase">
								INTO THE WILD
							</Override>
							<Override slot="icon" font="42px sans-serif" margin="0px 0px 12px 0px" />
							<Override slot="text1" font="normal 300 22px/1.5 --fontFamily-sansHelvetica">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" background="--color-indigo" color="--light">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
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
						<Components.CardExampleStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Components.CardExampleStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Components.CardExampleStep4>
							<Override slot="text" font="normal 700 38px/1.2 --fontFamily-sans" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 300 24px/1.5 --fontFamily-googleOpenSansCondensed">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="48px sans-serif" />
						</Components.CardExampleStep4>
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
					STEP 5 OF 5
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
				Detach
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
				Sometimes, you may need to turn a component back into a set of elements. This may be necessary for changing the structure of an element or adding new elements to the component. To do that, use{" "}
				<Em>
					the Detach
				</Em>
				{" "}feature.
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
									Select the second component. Click on the “3 dots” icon in the upper right corner of the right panel and select{" "}
									<Em>
										the Detach
									</Em>
									{" "}option.
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
									Style the resulting elements as in the example below.
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
						<Components.CardWorkStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
						<Components.CardWorkStep4>
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardWorkStep4>
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
						<Components.CardExampleStep4 margin="0px 32px 0px 0px">
							<Override slot="text">
								INTO THE WILD
							</Override>
							<Override slot="text1">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button">
								JOIN
							</Override>
						</Components.CardExampleStep4>
						<Box
							width="100%"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
							box-sizing="border-box"
							padding="36px 36px 48px 36px"
							opacity="1"
							transition="background 0.3s ease 0s"
							sm-padding="36px 36px 48px 36px"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/210% no-repeat"
							hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/230% no-repeat"
							margin="0px 32px 0px 0px"
							border-radius="24px"
						>
							<Text
								color="--lightD2"
								text-align="left"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								font="normal 500 14px/1.5 --fontFamily-mono"
								text-transform="uppercase"
								letter-spacing="3px"
								margin="0px 0px 4px 0px"
								background="--color-darkL2"
								padding="2px 12px 2px 12px"
							>
								Trips
							</Text>
							<Text
								text-transform="uppercase"
								text-align="left"
								margin="6px 0px 4px 0px"
								md-font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 600 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								font="normal 700 38px/1.2 --fontFamily-sans"
								color="--light"
							>
								INTO THE WILD
							</Text>
							<Text
								color="--lightD2"
								text-align="left"
								md-font="normal 300 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-font="normal 300 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
								sm-margin="10px 0px 4px 0px"
								md-margin="16px 0px 8px 0px"
								font="normal 300 18px/1.5 --fontFamily-sans"
							>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Text>
							<Icon
								category="md"
								icon={MdArrowForward}
								align-self="flex-end"
								font="48px sans-serif"
								color="--darkL2"
								margin="auto 0px 0px 0px"
								background="--color-light"
								border-radius="50%"
								width="64px"
								height="64px"
							/>
						</Box>
						<Components.CardExampleStep4>
							<Override slot="text" font="normal 700 38px/1.2 --fontFamily-sans" color="--light">
								INTO THE WILD
							</Override>
							<Override slot="text1" font="normal 300 24px/1.5 --fontFamily-googleOpenSansCondensed">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="button" border-radius="12px" background="--color-green" color="--light">
								JOIN
							</Override>
							<Override slot="icon" font="48px sans-serif" />
						</Components.CardExampleStep4>
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
				{" \n    "}You’ve worked through the main options for using components on a page. What about a little practice now?
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
									margin="20px 0px 0px 0px"
									width="100%"
									color="--darkL2"
								>
									Build a card, convert it into a component, duplicate it and add content and styles to each copy
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
						<Components.CardExampleSuper>
							<Override slot="text1">
								Sea
							</Override>
							<Override slot="text2">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Override slot="text">
								TOUR
							</Override>
						</Components.CardExampleSuper>
						<Components.CardExampleSuper position="relative" overflow-x="hidden" overflow-y="hidden">
							<Override slot="text1">
								MOUNTAINS
							</Override>
							<Override slot="text" background="#C2AB9D">
								TOUR
							</Override>
							<Override slot="icon" icon="FaMountain" />
							<Override slot="text2">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
							<Text
								position="absolute"
								left="auto"
								transform="rotate(45deg)"
								bottom="auto"
								top="9px"
								right="-31px"
								background="--color-light"
								padding="3px 32px 3px 32px"
								font="--base"
								text-transform="uppercase"
								letter-spacing="1px"
								height="24px"
								width="78.2656px"
								color="#5F6365"
							>
								popular
							</Text>
						</Components.CardExampleSuper>
						<Components.CardExampleSuper>
							<Override slot="icon" icon="FaTree" />
							<Override slot="text1">
								WOODS
							</Override>
							<Override slot="text" background="#CF9679">
								TOUR
							</Override>
							<Override slot="text2">
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Override>
						</Components.CardExampleSuper>
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
				Move on to the next stage
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				You’ve learned how to work with components in Quarkly. At the next stage, you will get to know theme


 and will learn:
			</Text>
			<List margin="0px 0px 48px 0px">
				<Text font="--base">
					How to add a value to the theme
				</Text>
				<Text font="--base">
					How to use a value
				</Text>
				<Text font="--base">
					How to change a value
				</Text>
				<Text font="--base">
					What are breakpoints and how to work with them.
				</Text>
			</List>
			<Box position="relative" display="inline-block" margin="0px 0px 0px 0px" quarkly-title="Step">
				<Text
					as="h2"
					font="--base"
					md-font="--headline2"
					color="--darkL2"
					position="relative"
					z-index="1"
					margin="0px 0px 5px 0px"
				>
					Go to{" "}
				</Text>
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
					Stage 4.   Theme →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="126.874px"
					height="47.268px"
					position="absolute"
					top="26px"
					left="-13px"
					right="auto"
					bottom="auto"
				/>
			</Box>
		</Section>
	</Theme>;
});