Ext.define("testing.view.Discussion", {
    extend: 'Ext.Container',
    xtype: 'discussionView',
    requires: ['Ext.Button', 'Ext.Label', 'Ext.Audio', 'testing.view.UserReport'],
    layout: {
        type: 'vbox'
    },
    config: {
        padding: '10px',
        items: [
            {
                xtype: 'container',
                layout: 'vbox',
                style: "background-color: #878787; font-size: larger",
                items: [
                    {
                        xtype: 'label',
                        id: 'timeRemainingLabel'
                    },
                   {
                        xtype: 'label',
                        id: 'messageLabel',
                        html: 'Waiting for New Speaker'
                    }
                ]
            },
            {
                xtype: 'button',
                centered: true,
                action: 'addToQueueEvent',
                height: 200,
                width: 200,
                text: 'My Turn',
                listeners: {
                	element: 'element',
                	longpress: 'absorbEvent',
                	taphold: 'absorbEvent',
                	touchstart: 'absorbEvent',
                	touchmove: 'absorbEvent',
                	touchend: 'absorbEvent',
                	touchcancel: 'absorbEvent'
                }
		// icon is set as background image in ../controller/Discussion.js
            }
         ]
    },
    
    absorbEvent: function (e) {
    	e.preventDefault();
    }
});
