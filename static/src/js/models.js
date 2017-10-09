openerp.pos_client_default = function(instance){
    var module   = instance.point_of_sale;
    var QWeb = instance.web.qweb;

    module.PosModel = module.PosModel.extend({
        models: (function() {
            var base_posmodel_model = module.PosModel.prototype.models;
            base_posmodel_model.push(
            {
            model:  'res.partner',
            fields: ['name','street','city','state_id','country_id','vat','phone','zip','mobile','email','ean13','write_date','ident_type','ident_num','default_customer'],
            domain: [['customer','=',true]],
            loaded: function(self,partners){
                self.partners = partners;
                self.db.add_partners(partners);
            },
            }
            );
            return base_posmodel_model;
	    })(),
    });

    module.Order = module.Order.extend({
        get_default_client: function(){
            var partners = this.pos.partners;
            var client_default = this.get('client');
            if(client_default == null)
            {
                _(partners).each(function(el){
                    if(el.default_customer)
                       client_default = el;
                });
            }

            if(client_default!=null)
                this.set('client',client_default);

            return this.get('client') != null? this.get('client').name : this.get('client');
        },
    });
}