export const treeData = {
    "children": [{
            "name": "oceans",
            "value": 96.5,
        },
        {
            "name": "saline",
            "value": 0.9,
        },
        {
            "name": "freshwater",
            "children": [{
                    "name": "surface",
                    "group": "B",
                    "value": 2.5 * 0.012,
                },
                {
                    "name": "groundwater",
                    "group": "B",
                    "value": 2.5 * 0.301,
                },
                {
                    "name": "icecaps",
                    "group": "B",
                    "value": 2.5 * 0.687,
                },
            ],
        }
    ],
    "name": "Sources of Water"
}

export const treeDataPartial = {
    "children": [{
            "name": "oceans",
            "value": 0,
        },
        {
            "name": "saline",
            "value": 0,
        },
        {
            "name": "freshwater",
            "children": [{
                    "name": "surface",
                    "group": "B",
                    "value": 100 * 0.012,
                },
                {
                    "name": "groundwater",
                    "group": "B",
                    "value": 100 * 0.301,
                },
                {
                    "name": "icecaps",
                    "group": "B",
                    "value": 100 * 0.687,
                }
            ],
        }
    ],
    "name": "Sources of Water"
}

export const sourceDesc = {
  "oceans": ["The vast majority of water on the earth is", "found in its oceans. Being saline in nature,","such water sources are unfit for domestic usage."],
  "icecaps": ["This is not about oceans in fact it", "found in its oceans. Being saline,","such water sources are unfit for."],
}

export const legendDesc = {
  "origin": [
    {"name": "Other saline sources", 
    "percentage": "1",
    "desc": "",
    "colour": "#999"
    },
    {"name": "Freshwater", 
    "percentage": "2.5",
    "desc": "The vast majority of water on the earth is found in its oceans. Being saline in nature.",
    "colour": "#333"
    },
  ],
  "freshwater": [
    {"name": "Groundwater", 
    "percentage": "30.1",
    "desc": "",
    "colour": "#efefef"
    },
    {"name": "Surface water", 
    "percentage": "1.2",
    "desc": "Surprisingly not a lot of freshwater is found at the surface of the earth.",
    "colour": "#222"
    },
  ],
}

