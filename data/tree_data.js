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
  "oceans": ["The vast majority of water on the earth is", "found in its oceans. Being saline in nature,","such water sources are unfit for human usage."],
  "icecaps": ["More than two-thirds of all freshwater", "available is locked behind glaciers","and ice caps."],
}

export const legendDesc = {
  "origin": [
    {
    "name": "Other saline sources", 
    "percentage": "1",
    "desc": "Water sources with more than 1000 ppm dissolved salts( freshwater - <1000 ppm)",
    "colour": "#eaa67f"
    },
    {
    "name": "Freshwater", 
    "percentage": "2.5",
    "desc": "",
    "colour": "#986985"
    },
  ],
  "freshwater": [
    {
    "name": "Groundwater", 
    "percentage": "30.1",
    "desc": "",
    "colour": "#eaa67f"
    },
    {
    "name": "Surface water", 
    "percentage": "1.2",
    "desc": "Rivers, lakes, reservoirs, creeks, streams, etc.",
    "colour": "#986985"
    },
  ],
}

