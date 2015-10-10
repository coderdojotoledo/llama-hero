(function() {
    var Game = new Phaser.Game(800, 600, Phaser.AUTO, 'Llama Hero!');

    Game.state.add("Level1", Level1);
    Game.state.start("Level1");

})();
