# -*- coding: utf-8 -*-
{
    'name': "POS Default Client",

    'summary': """Add a default client on pos session.""",

    'description': """
        Add a default client on pos session
    """,

    'author': "Diana Rojas",
    'website': "http://www.yourcompany.com",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': ['point_of_sale',
                ],

    'data': ['views/pos_client_default_view.xml',
            'templates.xml',
            ],
    'qweb':[

        'static/src/xml/pos.xml',
    ],
    'installable': True,
    'auto_install': False,
}