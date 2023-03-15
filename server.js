export default {
	onConnect(websocket, room) {
		// called whenever a user join a room
		websocket.send("RIBBIT FROM " + room.id)
	},
}
