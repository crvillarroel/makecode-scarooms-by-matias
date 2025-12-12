controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function feed (mySprite: Sprite) {
	
}
let myPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(myPlayer)
scene.cameraFollowSprite(myPlayer)
