function addWidgetsForm084254f597f6f40() {
    Form084254f597f6f40.setDefaultUnit(kony.flex.DP);
    var Segment09b7fd0ba9a3b4a = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Button030f7902a10824f": "Button",
            "Label07c6b6fab135a48": "Label"
        }, {
            "Button030f7902a10824f": "Button",
            "Label07c6b6fab135a48": "Label"
        }, {
            "Button030f7902a10824f": "Button",
            "Label07c6b6fab135a48": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "Segment09b7fd0ba9a3b4a",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexContainer084e2351b32234f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Button030f7902a10824f": "Button030f7902a10824f",
            "FlexContainer084e2351b32234f": "FlexContainer084e2351b32234f",
            "Label07c6b6fab135a48": "Label07c6b6fab135a48"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form084254f597f6f40.add(Segment09b7fd0ba9a3b4a);
};

function Form084254f597f6f40Globals() {
    Form084254f597f6f40 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm084254f597f6f40,
        "enabledForIdleTimeout": false,
        "id": "Form084254f597f6f40",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    Form084254f597f6f40.info = {
        "kuid": "99f9a37d283b479c94c8dc738ee39262"
    };
};