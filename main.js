var canvas = new fabric.Canvas('McDonalds');

var pr_y = 40;
var pr_x = 40;
var obj_pr = "";
var bk_img = "";

function Player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        obj_pr = img;
        obj_pr.scaleToWidth(155);
        obj_pr.scaleToHeight(200);
        obj_pr.set({
            top: Player_y,
            left: PlAyEr_x
        });
        canvas.add(obj_pr);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        bk_img = img;

        bk_img.scaleToWidth(blox_width);
        bk_img.scaleToHeight(blox_height);
        bk_img.set({
            top: Player_y,
            left: PlAyEr_x
        });
        canvas.add(bk_img);
    });
}