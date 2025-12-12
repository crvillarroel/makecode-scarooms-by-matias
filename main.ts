controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
function feed (mySprite: Sprite) {
	
}
let myEnemyBacteria: Sprite = null
let myPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(myPlayer)
scene.cameraFollowSprite(myPlayer)
tiles.setCurrentTilemap(tilemap`level3`)
if (Math.percentChance(0.01)) {
    myEnemyBacteria = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        . . f . . f f . . f . . 
        . . f . . . f . f f . . 
        . f f . . f f . f . . . 
        . f f . . f f . f . . . 
        . . f . . f . . f f . . 
        . f f . f . f f . f f . 
        . f . . f . . f . . f . 
        f f . f f . . f . . f f 
        . f . f . . . f f . f . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemyBacteria, assets.tile`floor`)
    myEnemyBacteria.setVelocity(45, 45)
    myEnemyBacteria.follow(myPlayer)
}
