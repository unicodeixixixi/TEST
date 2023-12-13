var wiperActive = false;
var selection = null;
function regWipe() {
    selection = new RegionSelection();
    selection.init();
    selection.onselection(function (start, end, width, height) {
        var star = [start[0] * 16 + start[2], start[1] * 8 + start[3]];
        var en = [end[0] * 16 + end[2], end[1] * 8 + end[3]];
        let bound = width * height;
	for (let i = star[1]; i <= en[1]; i++) {
        for (let j = star[0]; j <= en[0]; j++) {
            var NEEDED = getCharInfoXY(j,i);
            if (NEEDED.char == " " || NEEDED.char == null){
                continue;
            } else {
                writeCharToXY("⚽",0x0,j,i,null);
            }
        
        
    }
    }
        if (wiperActive) {
            regWipe();
        }
    });
    selection.startSelection();
}
menu.addCheckboxOption("Activate Wiper", () => { wiperActive = true; regWipe(); }, () => { wiperActive = false; if (selection !== null) { selection.destroy(); } }, false);w.chat.send("/warp /");
