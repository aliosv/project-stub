modules.define('map', ['i-bem__dom', 'ymaps'], function(provide, BEMDOM, ym) {

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            js : {
                inited : function() {
                    var map = new ym.Map(this.domElem.get(0), {
                        center : [34.1, 44.94],
                        zoom : 9
                    });
                }
            }
        }
    }));

});
