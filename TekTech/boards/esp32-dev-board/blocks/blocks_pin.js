Blockly.defineBlocksWithJsonArray([{
        "type": "pin_digital_read",
        "message0": "digital read pin %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "pin",
            "options": [
                [
                    "B1",
                    "39"
                ],
                [
                    "B2",
                    "36"
                ],
                [
                    "B3",
                    "17"
                ],
                [
                    "B4",
                    "16"
                ],

                [
                    "N1",
                    "35"
                ],
                [
                    "N2",
                    "32"
                ],
                [
                    "N3",
                    "33"
                ],
                [
                    "N4",
                    "13"
                ],
                [
                    "N5",
                    "15"
                ],
                [
                    "N6",
                    "2"
                ],

            ]
        }],
        "output": [
            "Number",
            "Boolean"
        ],
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_touch_read",
        "message0": "touch read pin %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "pin",
            "options": [
                [
                    "IN1",
                    "32"
                ],
                [
                    "IN2",
                    "33"
                ]
            ]
        }],
        "output": "Number",
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_analog_read",
        "message0": "analog read  %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "pin",
            "options": [

                [
                    "N1",
                    "35"
                ],
                [
                    "N2",
                    "32"
                ],
                [
                    "N3",
                    "33"
                ],

            ]
        }],
        "output": "Number",
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_analog_write",
        "message0": "PWM write %1 to pin %2",
        "args0": [{
                "type": "input_value",
                "name": "value",
                "check": "Number"
            },
            {
                "type": "field_dropdown",
                "name": "pin",
                "options": [

                    [
                        "OUT2",
                        "32"
                    ],
                    [
                        "OUT3",
                        "33"
                    ],
                    [
                        "OUT4",
                        "13"
                    ],
                    [
                        "OUT5",
                        "15"
                    ],
                    [
                        "OUT6",
                        "2"
                    ],


                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_digital_write",
        "message0": "digital write %1 to pin %2",
        "args0": [{
                "type": "input_value",
                "name": "value",
                "check": [
                    "Boolean",
                    "Number"
                ]
            },
            {
                "type": "field_dropdown",
                "name": "pin",
                "options": [


                    [
                        "OUT2",
                        "32"
                    ],
                    [
                        "OUT3",
                        "33"
                    ],
                    [
                        "OUT4",
                        "13"
                    ],
                    [
                        "OUT5",
                        "15"
                    ],
                    [
                        "OUT6",
                        "2"
                    ],
                    [
                        "moto1_1",
                        "14"
                    ],
                    [
                        "moto1_2",
                        "18"
                    ],
                    [
                        "moto2_1",
                        "19"
                    ],
                    [
                        "moto2_2",
                        "23"
                    ],

                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_Rgb_write",
        "message0": " Lamp: %1 Turn: %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "lamp",
                "options": [
                    [
                        "RED",
                        "25"
                    ],
                    [
                        "GREEN",
                        "26"
                    ],
                    [
                        "BLUE",
                        "27"
                    ],

                ]
            },
            {
                "type": "field_dropdown",
                "name": "turn",
                "options": [
                    [
                        "ON",
                        "1"
                    ],
                    [
                        "OFF",
                        "0"
                    ],


                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
]);