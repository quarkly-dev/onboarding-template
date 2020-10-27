import React from "react";
import theme from "theme";
import { Theme, Text, Box, Em, Span, Image, Icon, List, Button, Strong, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { BsDot } from "react-icons/bs";
import { MdFace } from "react-icons/md";
import { FaTree } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
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
				width="33.33%"
				color="--light"
			>
				Quarkly Basics
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Project pages consist of styled elements. Here you will learn how to add elements to the page, fill them with information, and style.
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
				Add elements
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				To start, open the Layers panel and switch to the{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Components tab.
				</Em>
				{" "}Next, drag elements to the workspace.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Open the Layers panel, switch to the{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em>
										Components
									</Em>
									{" "}tab
								</Span>
								, choose{" "}
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
									Box,
								</Span>
								{" "}grab it and drag to the workspace.
							</Text>
							<Image width="100%" src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-tutorial-drag&drop.svg?v=2020-10-24T19:07:24.859Z" border-radius="4px" />
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
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								After that,


 add elements to{"  "}
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
							>
								The first element —
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
								{"  "}— is going to be the heading, while the second one — the card description.
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
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Double-click on the elements and change the text as it's shown in the example.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
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
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Text>
							<Button>
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
				Style the background
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Now that we have created the card structure let's style it a little bit: add{" "}
				<Em>
					background
				</Em>
				{" "}and{" "}
				<Em>
					border radius
				</Em>
				.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Choose{" "}
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
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-selected-box.jpg?v=2020-10-24T19:09:59.447Z" border-radius="4px" />
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Navigate to{"  "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Styles
								</Em>
								{" "}>{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Layout
								</Em>
								{" "}tab on the Props Panel and set width to{" "}
								<Strong>
									100%
								</Strong>
								{" "}and height to{" "}
								<Strong>
									320px
								</Strong>
							</Text>
							<Image src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
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
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Now, having selected{" "}
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
								, go to{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Backgrounds
								</Em>
								, click in the input field to open the panel, choose Type{" "}
								<Strong>
									URL
								</Strong>
								, and copy-paste the image URL:
							</Text>
							<Link
								href="#"
								word-break="break-all"
								overflow-wrap="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="--base"
								color="--primary"
								margin="0px 0px 16px 0px"
							>
								https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80
							</Link>
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
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Double-click on the elements and change the text according the the example.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
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
						<Box>
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
							</Text>
							<Button>
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
				Style your text and button
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Let's put your knowledge of styles to use and try to style the button and text as it's shown in the example.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Style your heading and description according to the example. This time use the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Typography
								</Em>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}tab
								</Span>
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-typography-tab-closed.jpg?v=2020-10-24T19:24:46.250Z" border-radius="4px" />
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
								You can copy and paste styles from the example using the shortcuts:
								<br />
								Mac:
								<br />
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
									⌥
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
									с
								</Span>
								,{" "}
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
									⌥
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
									v
								</Span>
								, 
						Windows:
								<br />
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
									alt
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
									c
								</Span>
								,
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
									alt
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
									v
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Now style{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Change properties: Color and Letter Spacing (
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Typography
								</Em>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}tab
								</Span>
								), Background (
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Background{" "}
									</Em>
									tab
								</Span>
								) and Border radius (
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Border tab
								</Em>
								).{" "}
							</Text>
							<List
								width="100%"
								box-sizing="border-box"
								padding="0px 0px 0px 0px"
								font="--base"
								list-style-type="none"
								color="--darkL2"
								margin="0px 0px 16px 0px"
							>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Color and Letter Spacing (Typography)
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Background (Background)
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Text
										display="block"
										font="--base"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Border radius (Border)
									</Text>
								</Box>
							</List>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-background-tab-closed.jpg?v=2020-10-24T19:24:46.251Z" border-radius="4px" />
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-border-tab-closed.jpg?v=2020-10-24T19:24:46.253Z" border-radius="4px" />
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
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Add the shadow for{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. To do this, open the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Effects
								</Em>
								{" "}tab and use the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box shadow{" "}
								</Em>
								property. Copy the value from the example.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-effects-tab-closed.jpg?v=2020-10-24T21:04:00.774Z" border-radius="4px" />
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
							4
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Finally, add indents for{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
									margin="0px 4px 0px 2px"
								/>
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Open the{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Em
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Indents{" "}
									</Em>
									tab
								</Span>
								. Specify margin 25px for the top field, padding 50px for the sides and 15px for the top and bottom fields.
							</Text>
							<Image src="https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-indents-tab-closed.jpg?v=2020-10-24T21:04:17.597Z" border-radius="4px" />
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
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
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?fit=crop&w=750&q=80) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Into the Wild
							</Text>
							<Text>
								A wonderful journey to woods and mountains will heal your mind, body, and soul. It will be a trip to remember.
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
				Change the icon and font
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Apply the distinctive font for the heading and replace the icon with the more fitting one
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Choose the heading, from the Styles panel go to the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Typography
								</Em>
								{"  "}tab and click on the [theme] icon. You have removed the link with the value from the Theme. Now add the new font to the project. For this, click on the value to open the panel. On the panel, click on the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Add google fonts
								</Em>
								{" "}button.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								In the modal window, search for{" "}
								<Em>
									Open Sans Condenced
								</Em>
								. Click on it and close the window. That's how we've added the new font to the project.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
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
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Now choose the new font for the heading. Open the panel with font settings and choose{"  "}
								<Em>
									googleOpenSansCondenced
								</Em>
								{" "}for the Family field.
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
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							The only thing left is to change the icon. To do this, double-click it. The modal window featuring all icons will appear. Choose the{" "}
							<Em>
								Font Awesome
							</Em>
							{"  "}category and enter{" "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								tree
							</Em>
							into the search bar. Click on the icon{" "}
							<Icon vertical-align="middle" category="fa" icon={FaTree} display="inline-block" />
							{" "}
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
							5
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Style the color and button size according to the example
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
				Center align elements{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				By default, the content aligns along the left side. Change this to center align{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					<Image
						width="24px"
						height="24px"
						vertical-align="text-top"
						src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
						margin="0px 2px 0px 2px"
					/>
					Box
				</Span>
				{" "}with the help of display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Choose{" "}
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
								{" "}on the page and open the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Layouts
								</Em>
								{"  "}tab on the{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Styles
								</Em>
								{" "}panel. Specify the flex value for the display property. This means that{" "}
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
								{"  "}will use flexbox — the more convenient way for aligning elements.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
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
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Once we've chosen the Flex value for display, the new properties appeared under{"  "}
								<Em>
									Layout
								</Em>
								{" "}. Search for Flex direction and choose the column value
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
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
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 18px 0px"
								width="100%"
								color="--darkL2"
							>
								Choose the center value for Align items and Justify content properties.
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
									TIP
								</Span>
								<br />
								Experiment with different values to understand how this works.
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
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
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
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed" text-transform="uppercase" color="--light" text-align="center">
								Into the Wild
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
			>
				You've created your first card and studied the basics of web design. What about a little practice now?{" "}
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
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
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 18px 0px"
								width="100%"
								color="--darkL2"
							>
								Build a new card on your own. If you forget something scroll back to top and revise the materials. Happy designing!
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
								Choose elements from the example and view their styles.
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
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								<Strong font="normal 500 42px/1.2 --fontFamily-googleRobotoCondensed">
									Into the Wild
								</Strong>
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
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
					What's next?
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
				width="50%"
				color="--darkL2"
			>
				Congrats! You've done great job getting to the know the Quarkly basics. At the next stage, you are going to deepen your knowledge and learn how to:
			</Text>
			<List margin="0px 0px 16px 0px" color="--darkL2" font="--base">
				<Text>
					Style states: hover, focused and other
				</Text>
				<Text>
					Make the transition between states smooth
				</Text>
				<Text>
					Create adaptive design
				</Text>
			</List>
			<Image
				width="100%"
				src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg"
				border-radius="4px"
				max-width="540px"
				margin="0px 0px 48px 0px"
			/>
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
					Stage 2. Hover & Adaptive →
				</Text>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f44d57c7f10ba001eace3a0/images/onboarding-next-stage-bg.svg?v=2020-10-27T09:36:49.534Z) center/contain no-repeat scroll padding-box"
					display="inline-block"
					width="125.874px"
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