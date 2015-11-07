var Enemy = function(game) {
    this.x = game.world.randomX;
    this.y = game.world.randomY;
    this.minSpeed = -75;
    this.maxSpeed = 75;
    this.vx = Math.random()*(this.maxSpeed - this.minSpeed+1)-this.minSpeed;
    this.vy = Math.random()*(this.maxSpeed - this.minSpeed+1)-this.minSpeed;
    
    this.facing = this.vx > 0 ? "left" : "right";

    this.enemySprite = game.add.sprite(this.x,this.y,"enemy");
    game.physics.enable(this.enemySprite, Phaser.Physics.ARCADE);

    this.enemySprite.anchor.setTo(0.5, 0.5);
    this.enemySprite.body.collideWorldBounds = true;
    // this.enemySprite.body.bounce.setTo(1, 1);
    // this.enemySprite.body.velocity.x = this.vx;
    // this.enemySprite.body.velocity.y = this.vy;
    // this.enemySprite.body.immovable = true;
}

Enemy.prototype = {
    updateDirection: function() {
        if(this.facing === "left") {
            if(this.enemySprite.deltaX > 0) {
                this.facing === "right";
                this.enemySprite.scale.x *= -1;
            }
        } else if(this.facing === "right") {
            if(this.enemySprite.deltaX < 0) {
                this.facing === "left";
                this.enemySprite.scale.x *= -1;
            }
        }
    }
}