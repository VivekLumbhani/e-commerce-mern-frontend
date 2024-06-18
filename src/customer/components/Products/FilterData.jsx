export const color=[
    "White",
    "Black",
    "Red",
    "Marun",
    "Pink",
    "Green",
    "Yellow"
]
export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"White"},
            {value:"Black",label:"Black"},
            {value:"Red",label:"Red"},
            {value:"Marun",label:"Marun"},
            {value:"Pink",label:"Pink"},
            {value:"Green",label:"Green"},
            {value:"Yellow",label:"Yellow"},

        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},

        ]
    }
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"100-500",label:"100-500"},
            {value:"5001-1000",label:"5001-1000"},
            {value:"1001-1500",label:"1001-1500"},
            {value:"1501-2000",label:"1501-2000"},
            {value:"2000",label:"2000"},

        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% and above"},
            {value:"20",label:"20% and above"},
            {value:"30",label:"30% and above"},
            {value:"40",label:"40% and above"},
            {value:"50%",label:"50% and above"},

        ]
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In-stock"},
            {value:"out_of_stock",label:"Out-Of-Stock"},
        ]
    },

    
]