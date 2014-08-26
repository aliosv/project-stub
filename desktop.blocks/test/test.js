modules.define('test', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {
    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            js : {
                inited : function() {
                    var popup = $(BEMHTML.apply({
                        block : 'popup',
                        mods : { theme : 'normal', visible : true },
                        content : 'Content'
                    })).bem('popup');

                    popup.setTarget(this);

                    popup.delMod('visible');
                }
            }
        }
    }));
});
