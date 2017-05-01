function addWidgetsForm084254f597f6f40() {
    Form084254f597f6f40.setDefaultUnit(kony.flex.DP);
    var Segment09b7fd0ba9a3b4a = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Button030f7902a10824f": "Button111"
        }, {
            "Button030f7902a10824f": "Button111"
        }, {
            "Button030f7902a10824f": "Button111"
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
        "rowTemplate": FlexContainer011eddd569dc643,
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
            "FlexContainer011eddd569dc643": "FlexContainer011eddd569dc643"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    Form084254f597f6f40.add(Segment09b7fd0ba9a3b4a);
};

function Form084254f597f6f40Globals() {
    Form084254f597f6f40 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm084254f597f6f40,
        "enabledForIdleTimeout": false,
        "id": "Form084254f597f6f40",
        "init": AS_Form_4c2414a8aabe44a1996472c567f61009,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_c67c37be78a04a9cab5d0114d4f3248c,
        "preShow": AS_Form_e67f2d5028984568b7f9b478111f74c8,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    Form084254f597f6f40.info = {
        "kuid": "99f9a37d283b479c94c8dc738ee39262"
    };
};