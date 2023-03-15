import PartySocket from "../libraries/partysocket/index.js"

const socket = new PartySocket({
	// for local development
	host: "localhost:1999",
	// for production
	// host: "my-party.username.partykit.dev",
	room: "my-room",
})

console.log(socket)

socket.onmessage = (message) => {
	console.log(message) // "hello from room: my-room"
}
