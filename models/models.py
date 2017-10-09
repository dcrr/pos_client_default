from openerp.osv import fields, osv

class res_partner(osv.osv):
    _inherit = 'res.partner'

    _columns = {
        'default_customer': fields.boolean('Default Customer?', default=False),
    }

    def _check_default_customer(self, cr, uid, ids, context=None):
        default_customer_exist = self.search(cr, uid,[('default_customer', '=', True)], context=context)
        if len(default_customer_exist)>1:
            return False
        return True

    _constraints = [
        (_check_default_customer, "The default client already is configured", ['default_customer'],),
    ]
