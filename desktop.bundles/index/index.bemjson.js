({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block : 'test-icons',
            content : [
                [
                    'chrome',
                    'firefox',
                    'opera',
                    'safari',
                    'explorer'
                ].map(function(value) {
                        return {
                            elem : 'icon',
                            elemMods : {
                                image : value
                            }
                        };

                    return {
                        elem : 'icon',
                        elemMods : {
                            image : value
                        },
                        content : {
                            elem : 'icon-inner',
                            content : {
                                elem : 'alt',
                                content : {
                                    elem : 'alt-inner',
                                    content : value
                                }
                            }
                        }
                    };
                })
            ]
        }
    ]
})
