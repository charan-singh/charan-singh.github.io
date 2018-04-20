var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Public Properties
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        OverScene.prototype._backButtonClick = function () {
        };
        // Public Methods
        // Initialize Game Variables and objects
        OverScene.prototype.Start = function () {
            //  this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
            createjs.Sound.play("gameover");
            this._bg = new createjs.Bitmap(this.assetManager.getResult("over"));
            this.button = new objects.Button(this.assetManager, "restart", 320, 410);
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.ButtonClick = function () {
            console.log("start");
            objects.Game.scene = config.Scene.START;
        };
        // This is where the fun happens
        OverScene.prototype.Main = function () {
            // add the welcome label to the scene
            //   this.addChild(this._overLabel);
            this.addChild(this._bg);
            // add the backButton to the scene
            this.addChild(this.button);
            this.addChild(this._backButton);
            this.button.on("click", this.ButtonClick);
            // event listeners
            // this._backButton.on("click", this._backButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map