addBoard({
    id: "esp32-dev-board",
    name: "TekTech",
    description: "",
    image: "images/cover2.jpg",
    script: [
        "../esp32-dev-board/js/field_dotmatrix.js",
        "../esp32-dev-board/js/field_note.js",
        "../esp32-dev-board/js/sound.js",

        // "js/field_bitmap.js",
    ],
    css: [
        "../esp32-dev-board/css/field_dotmatrix.css",
        "../esp32-dev-board/css/field_note.css",
        // "css/field_bitmap.css",
    ],
    blocks: [
        "blocks/blocks_pin.js",
        "blocks/blocks_advanced.js",
        "blocks/blocks_buzzer.js",
        "blocks/blocks_display.js",
        "blocks/blocks_sensor.js",

        "blocks/generators_pin.js",
        "blocks/generators_avanced.js",
        "blocks/generators_buzzer.js",
        "blocks/generators_display.js",
        "blocks/generators_sensor.js"
    ],
    modules: [],
    firmware: [{
        name: "MicroPython for ESP32 Dev Board V1.6.0",
        path: "firmware/MicroPython.for.ESP32.Dev.Board.V1.6.0.bin",
        version: "V1.6.0",
        date: "2021-1-30",
        board: "ESP32 Dev Board",
        cpu: "ESP32"
    }],
    usb: [{ // CP2104
        vendorId: "10C4",
        productId: "EA60"
    }],
    autoCompletion: {
        display: {
            show: __Function,
            show4x8: __Function,
            left: __Function,
            right: __Function,
            plot: __Function,
            scroll: __Function,
            clear: __Function
        },
        sensor: {
            light: __Function,
            temperature: __Function
        },
        buzzer: {
            tone: __Function,
            on: __Function,
            off: __Function,
            note: __Function
        },
    },
    level: [{
        name: "Beginner",
        description: "",
        icon: "../kidbright32/images/puzzle.png",
        blocks: [{
                name: "Display",
                icon: `../kidbright32/images/matrix.png`,
                color: "#e64c3c",
                blocks: [
                    "display_custom",
                    {
                        xml: `
                            <block type="display_show">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">12</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_scroll">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">Hello!</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_show4x8">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">1234</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_left_show">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_right_show">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_plot">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_dot_show">
                                <value name="x">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="y">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="display_dot_hide">
                                <value name="x">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="y">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "display_clear",
                ]
            },
            {
                name: "Basic",
                icon: "/images/icon/led.png",
                color: "#ed3467",
                blocks: [{
                        xml: '<label text="Control"></label>',
                    },
                    "controls_forever",

                    {
                        xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },

                    {
                        xml: '<label text="Input"></label>',
                    },
                    {
                        xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },

                    {
                        xml: `
                                <block type="pin_analog_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    "sensor_light",
                    "sensor_temp",
                    {
                        xml: '<label text="Output"></label>',
                    },
                    {
                        xml: `
                                <block type="pin_Rgb_write">
                                    
                                    <value name="turn">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                    <value name="lamp">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="send_into_source">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">33</field>
                                        </shadow>
                                    </value>
                                    <value name="source">
                                        <shadow type="text">
                                            <field name="TEXT">source1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                            <block type="buzzer_tone">
                                <value name="freq">
                                    <shadow type="math_number">
                                        <field name="NUM">2000</field>
                                    </shadow>
                                </value>
                                <value name="duration">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="buzzer_notes">
                                <value name="notes">
                                    <block type="make_note">
                                        <field name="notes">C5</field>
                                    </block>
                                </value>
                                <field name="duration">1 / 2</field>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="buzzer_volume">
                                <value name="level">
                                    <shadow type="math_number">
                                        <field name="NUM">50</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                                <block type="pin_analog_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1023</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: '<label text="Blink Code"></label>',
                        //xml: '<label text="Mix Colour"></label>',
                    },
                    {
                        xml: `
                        <block type="controls_forever">
                            <statement name="block">
                                    <block type="pin_digital_write">
                                        <value name="value">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                        </value>
                                        <value name="pin">
                                            <shadow type="math_number">
                                                <field name="NUM">5</field>
                                            </shadow>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                            </value>
                                            <next>
                                                <block type="pin_digital_write">
                                                    <value name="value">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0</field>
                                                        </shadow>
                                                    </value>
                                                    <value name="pin">
                                                        <shadow type="math_number">
                                                            <field name="NUM">5</field>
                                                        </shadow>
                                                    </value>
                                                    <next>
                                                        <block type="controls_wait">
                                                            <value name="time">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">1</field>
                                                                    </shadow>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                
                            </statement>
                        </block>
                    `
                    },
                    {
                        xml: `
                        <block type="controls_forever">
                            <statement name="block">
                                    <block type="pin_Rgb_write">
                                        <value name="value">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                        </value>
                                        <value name="pin">
                                            <shadow type="math_number">
                                                <field name="NUM">5</field>
                                            </shadow>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                            </value>
                                            <next>
                                                <block type="pin_Rgb_write">
                                                    <value name="value">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0</field>
                                                        </shadow>
                                                    </value>
                                                    <value name="pin">
                                                        <shadow type="math_number">
                                                            <field name="NUM">5</field>
                                                        </shadow>
                                                    </value>
                                                    <next>
                                                        <block type="controls_wait">
                                                            <value name="time">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">1</field>
                                                                    </shadow>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                
                            </statement>
                        </block>
                    `
                    },
                ]
            },
            {
                name: "Control",
                icon: `/images/icon/process.png`,
                color: "#ed3467",
                blocks: [{
                        xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    "controls_forever",
                    {
                        xml: `
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="controls_for">
                                    <field name="VAR">i</field>
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="BY">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    "controls_if",
                    {
                        xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `
                    },
                    "controls_wait_until",
                    "controls_whileUntil",
                ]
            },
            {
                name: "Operators",
                icon: `/images/icon/maths.png`,
                color: "#ed3467",
                blocks: [{
                        xml: '<label text="Math"></label>',
                    },
                    {
                        xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">ADD</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MINUS</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MULTIPLY</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">DIVIDE</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_modulo">
                                    <value name="DIVIDEND">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="DIVISOR">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    "random_seed",
                    {
                        xml: `
                                <block type="math_random_int">
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_trig">
                                    <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">45</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="math_round">
                                    <field name="OP">ROUND</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: '<label text="Logic"></label>',
                    },
                    {
                        xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">GT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">LT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    "logic_operation",
                    "logic_negate",
                    {
                        xml: '<label text="Text"></label>',
                    },
                    "text",
                    "text_join"
                ]
            },
            {
                name: "Variables",
                icon: `/images/icon/relativity.png`,
                color: "#ed3467",
                blocks: "VARIABLE"
            },
            {
                name: "Function",
                icon: `/images/icon/jigsaw.png`,
                color: "#ed3467",
                blocks: "PROCEDURE"
            },
        ]
    }]
});