Editor.registerWidget( 'fire-color', {
    is: 'fire-color',

    behaviors: [EditorUI.focusable],

    listeners: {
        'focus': '_onFocus',
        'blur': '_onBlur',
    },

    properties: {
        color: {
            type: Object,
            value: function () {
                return new Fire.color(0,0,0,1);
            },
            observer: '_colorChanged'
        },
    },

    ready: function () {
        this._initFocusable(this);
    },

    _colorChanged: function () {
        this.$.previewRGB.style.backgroundColor = chroma(this.color.r, this.color.g, this.color.b, this.color.a).css('rgba');
        this.$.alpha.style.width = (this.color.a / 1) * 100 + '%';
    },

    _showColorPicker: function () {
        var _colorPicker = document.createElement('color-picker');
        document.body.appendChild(_colorPicker);
    },
});
