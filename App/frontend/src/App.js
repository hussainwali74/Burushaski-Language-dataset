import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import { ReactMediaRecorder } from "react-media-recorder"

function App() {
	useEffect(() => {}, [])

	return (
		<div className="App">
			<header className="App-header">
				<ReactMediaRecorder
					audio
					render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
						console.log("-------------------------------------------------------")
						console.log("mediaBlobUrl :>>", mediaBlobUrl)
						console.log("-------------------------------------------------------")

						return (
							<div>
								<p>{status}</p>
								<button onClick={startRecording}>Start Recording</button>
								<button onClick={stopRecording}>Stop Recording</button>
								<br />
								{mediaBlobUrl}
								<br />
								<audio src={mediaBlobUrl} controls autoplay loop />
							</div>
						)
					}}
				/>
			</header>
		</div>
	)
}

export default App
