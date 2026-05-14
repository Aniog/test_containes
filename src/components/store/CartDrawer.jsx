import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQty, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            <h2 className="font-display font-bold text-gray-800 text-lg">Mi Carrito</h2>
            {items.length > 0 && (
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-500"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Tu carrito está vacío</p>
                <p className="text-sm text-gray-400">Añade productos para empezar</p>
              </div>
              <button
                onClick={onClose}
                className="bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all"
              >
                Explorar tienda
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-400 font-semibold">{item.category}</p>
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                    <p className="text-sm font-bold text-gray-800 mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-blue-300 transition-all"
                      >
                        <Minus className="w-3 h-3 text-gray-600" />
                      </button>
                      <span className="text-sm font-semibold text-gray-700 w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-blue-300 transition-all"
                      >
                        <Plus className="w-3 h-3 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all self-start"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-gray-800 text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-emerald-600 text-center bg-emerald-50 py-2 rounded-lg">
              ✓ Envío gratis incluido
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-500 text-white py-4 rounded-full font-bold hover:from-blue-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
              Finalizar Compra
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-600 text-sm hover:text-gray-800 transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
