function initializeTempTest() {
    FlexContainer084e2351b32234f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer084e2351b32234f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer084e2351b32234f.setDefaultUnit(kony.flex.DP);
    var Button030f7902a10824f = new kony.ui.Button({
        "height": "50dp",
        "id": "Button030f7902a10824f",
        "isVisible": true,
        "left": "64dp",
        "skin": "CopyslButtonGlossBlue0c0bedcdf94ef49",
        "text": "Button",
        "top": "52dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label07c6b6fab135a48 = new kony.ui.Label({
        "id": "Label07c6b6fab135a48",
        "isVisible": true,
        "left": "65dp",
        "skin": "CopyslLabel08cc83f83dae449",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "128dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer084e2351b32234f.add(Button030f7902a10824f, Label07c6b6fab135a48);
}