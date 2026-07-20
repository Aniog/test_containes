import React, { useState, createContext, useContext } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, setIsCartOpen, isCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: "400px",
      backgroundColor: "white",
      boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
      zIndex: 1000,
      padding: "30px",
      overflowY: "auto"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", fontFamily: "Georgia, serif", letterSpacing: "2px" }}>
          YOUR CART
        </h2>
        <button
          onClick={() => setIsCartOpen(false)}
          style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}
        >
          ×
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p style={{ color: "#666", textAlign: "center", marginTop: "40px" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{
              display: "flex",
              gap: "16px",
              marginBottom: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #e5e5e5"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ color: "#999", fontSize: "10px", textAlign: "center" }}>
                  {item.name}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "12px", fontFamily: "Georgia, serif", letterSpacing: "1px", marginBottom: "8px" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#d97706", fontFamily: "Georgia, serif", marginBottom: "8px" }}>
                  ${item.price}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{ width: "24px", height: "24px", border: "1px solid #e5e5e5", background: "white", cursor: "pointer" }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "14px", minWidth: "24px", textAlign: "center" }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{ width: "24px", height: "24px", border: "1px solid #e5e5e5", background: "white", cursor: "pointer" }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: "auto", color: "#999", background: "none", border: "none", cursor: "pointer", fontSize: "12px" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: "2px solid #1a1a1a", paddingTop: "20px", marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontSize: "16px", fontFamily: "Georgia, serif", letterSpacing: "1px" }}>
                TOTAL
              </span>
              <span style={{ fontSize: "18px", fontFamily: "Georgia, serif", color: "#d97706", fontWeight: "600" }}>
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <button style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#d97706",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              letterSpacing: "2px",
              fontFamily: "Georgia, serif",
              cursor: "pointer"
            }}>
              CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function CartCountBadge() {
  const { cartCount } = useCart();
  if (cartCount === 0) return null;
  return (
    <span style={{
      position: "absolute",
      top: "-8px",
      right: "-8px",
      backgroundColor: "#d97706",
      color: "white",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      fontSize: "11px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "600"
    }}>
      {cartCount}
    </span>
  );
}
function HomePage() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "VIVID AURA JEWELS", price: 42, desc: "Gold ear cuff with crystal accent" },
    { id: 2, name: "MAJESTIC FLORA NECTAR", price: 68, desc: "Multicolor floral crystal necklace" },
    { id: 3, name: "GOLDEN SPHERE HUGGIES", price: 38, desc: "Chunky gold dome huggie earrings" },
    { id: 4, name: "AMBER LACE EARRINGS", price: 54, desc: "Textured gold filigree drop earrings" },
    { id: 5, name: "ROYAL HEIRLOOM SET", price: 95, desc: "Gift-boxed earring + necklace set" }
  ];

  const testimonials = [
    { name: "Sarah M.", initial: "S", text: "Absolutely love my Vivid Aura Jewels! The quality is incredible for the price.", rating: 5 },
    { name: "Emily R.", initial: "E", text: "The Golden Sphere Huggies are my everyday go-to. So comfortable!", rating: 5 },
    { name: "Jessica L.", initial: "J", text: "Bought the Royal Heirloom Set as a gift and she cried happy tears!", rating: 5 }
  ];

  return (
    <div style={{ backgroundColor: "#faf9f7" }}>
      <header style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "24px", letterSpacing: "4px" }}>
          VELMORA
        </div>
        <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <a href="/shop" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "14px", letterSpacing: "1px" }}>SHOP</a>
          <a href="/shop" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "14px", letterSpacing: "1px" }}>COLLECTIONS</a>
          <a href="#" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "14px", letterSpacing: "1px" }}>ABOUT</a>
          <a href="#" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "14px", letterSpacing: "1px" }}>JOURNAL</a>
          <span style={{ cursor: "pointer", fontSize: "18px" }}>🔍</span>
          <span
            onClick={() => useCart().setIsCartOpen(true)}
            style={{ cursor: "pointer", fontSize: "18px", position: "relative" }}
          >
            🛒
            <CartCountBadge />
          </span>
        </nav>
      </header>

      <section style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #d97706 100%)",
        color: "white",
        padding: "120px 40px",
        textAlign: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "64px",
          fontFamily: "Georgia, serif",
          letterSpacing: "8px",
          marginBottom: "20px",
          fontWeight: "300"
        }}>
          CRAFTED TO BE TREASURED
        </h1>
        <p style={{
          fontSize: "20px",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          marginBottom: "40px",
          opacity: "0.9"
        }}>
          Demi-fine gold jewelry for everyday elegance
        </p>
        <a href="/shop" style={{
          padding: "18px 56px",
          backgroundColor: "#d97706",
          color: "white",
          textDecoration: "none",
          fontSize: "14px",
          letterSpacing: "3px",
          fontFamily: "Georgia, serif",
          display: "inline-block"
        }}>
          SHOP THE COLLECTION
        </a>
      </section>

      <section style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e5e5",
        padding: "16px 40px"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap"
        }}>
          {["FREE WORLDWIDE SHIPPING", "30-DAY RETURNS", "18K GOLD PLATED", "HYPOALLERGENIC"].map((item) => (
            <span key={item} style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#666" }}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "36px",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "16px",
          letterSpacing: "2px"
        }}>
          BESTSELLERS
        </h2>
        <div style={{
          width: "60px",
          height: "2px",
          backgroundColor: "#d97706",
          margin: "0 auto 60px"
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}>
              <div style={{
                height: "220px",
                background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px"
              }}>
                <span style={{ color: "#999", fontSize: "13px", textAlign: "center", padding: "10px" }}>
                  {product.name}
                </span>
              </div>
              <h3 style={{
                fontSize: "12px",
                fontFamily: "Georgia, serif",
                letterSpacing: "1.2px",
                marginBottom: "8px",
                color: "#1a1a1a"
              }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
                {product.desc}
              </p>
              <p style={{
                fontSize: "16px",
                fontFamily: "Georgia, serif",
                color: "#d97706",
                fontWeight: "600",
                marginBottom: "12px"
              }}>
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#d97706",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  cursor: "pointer"
                }}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "80px 40px", backgroundColor: "white" }}>
        <h2 style={{
          fontSize: "36px",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "2px"
        }}>
          SHOP THE LOOK
        </h2>
        <div style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "20px",
          maxWidth: "1280px",
          margin: "0 auto"
        }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} style={{
              minWidth: "300px",
              height: "400px",
              background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "20px",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "#1a1a1a",
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                fontStyle: "italic"
              }}>
                Velmora Style {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "36px",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "2px"
        }}>
          SHOP BY CATEGORY
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px"
        }}>
          {["Earrings", "Necklaces", "Huggies"].map((cat) => (
            <a key={cat} href="/shop" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{
                height: "300px",
                background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>
                <h3 style={{
                  color: "white",
                  fontSize: "24px",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "3px"
                }}>
                  {cat}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 40px", backgroundColor: "white" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          <div style={{
            height: "400px",
            background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
            borderRadius: "4px"
          }} />
          <div>
            <h2 style={{
              fontSize: "36px",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
              letterSpacing: "2px"
            }}>
              OUR STORY
            </h2>
            <div style={{
              width: "60px",
              height: "2px",
              backgroundColor: "#d97706",
              marginBottom: "20px"
            }} />
            <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.8", marginBottom: "30px" }}>
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality.
              Each piece is crafted with intention, using 18K gold plating and hypoallergenic materials
              that are designed to be treasured for years to come.
            </p>
            <a href="#" style={{
              color: "#d97706",
              textDecoration: "none",
              fontFamily: "Georgia, serif",
              fontSize: "14px",
              letterSpacing: "1px",
              borderBottom: "1px solid #d97706",
              paddingBottom: "4px"
            }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "36px",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "2px"
        }}>
          WHAT OUR CUSTOMERS SAY
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} style={{
              padding: "30px",
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}>
              <div style={{ marginBottom: "16px", color: "#d97706", fontSize: "18px" }}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#d97706",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Georgia, serif",
                  fontSize: "16px"
                }}>
                  {testimonial.initial}
                </div>
                <span style={{ fontSize: "14px", fontFamily: "Georgia, serif", color: "#1a1a1a" }}>
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
        padding: "80px 40px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{
          fontSize: "36px",
          fontFamily: "Georgia, serif",
          marginBottom: "16px",
          fontWeight: "300"
        }}>
          JOIN FOR 10% OFF
        </h2>
        <p style={{ marginBottom: "40px", opacity: "0.9", fontSize: "16px" }}>
          Subscribe to receive exclusive offers and jewelry care tips
        </p>
        <div style={{
          display: "flex",
          gap: "12px",
          maxWidth: "480px",
          margin: "0 auto",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "16px 20px",
              border: "1px solid rgba(255,255,255,0.3)",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              borderRadius: "4px",
              fontSize: "14px"
            }}
          />
          <button style={{
            padding: "16px 48px",
            backgroundColor: "white",
            color: "#d97706",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
            borderRadius: "4px",
            fontSize: "14px",
            letterSpacing: "1px"
          }}>
            SUBSCRIBE
          </button>
        </div>
      </section>

      <footer style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "60px 40px 30px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h3 style={{
            fontSize: "24px",
            fontFamily: "Georgia, serif",
            letterSpacing: "4px",
            marginBottom: "30px"
          }}>
            VELMORA
          </h3>
          <p style={{ opacity: "0.7", fontSize: "14px", maxWidth: "600px", margin: "0 auto 30px" }}>
            Demi-fine jewelry crafted with intention. 18K gold plated, designed for everyday elegance.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "30px"
          }}>
            {["Instagram", "Pinterest", "TikTok"].map((social) => (
              <a key={social} href="#" style={{ color: "white", textDecoration: "none", fontSize: "14px", opacity: "0.8" }}>
                {social}
              </a>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #333", paddingTop: "30px", opacity: "0.6", fontSize: "13px" }}>
            Copyright 2024 Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
function ProductDetail() {
  const { addToCart } = useCart();
  const product = {
    name: "VIVID AURA JEWELS",
    price: 42,
    desc: "Gold ear cuff with crystal accent. Each piece is carefully crafted with 18K gold plating for a luxurious finish that lasts.",
    details: "Our demi-fine jewelry is crafted with 18K gold plating over a base of recycled brass. Each piece is nickel-free and hypoallergenic, perfect for sensitive skin. To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and lotions."
  };

  return (
    <div style={{ backgroundColor: "#faf9f7", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 40px 80px" }}>
        <a href="/" style={{ color: "#666", textDecoration: "none", fontSize: "14px", display: "inline-block", marginBottom: "30px" }}>← Back to Home</a>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "80px" }}>
          <div style={{
            height: "500px",
            background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <span style={{ color: "#999", fontSize: "16px", textAlign: "center", padding: "20px" }}>
              {product.name}
            </span>
          </div>

          <div>
            <h1 style={{
              fontSize: "32px",
              fontFamily: "Georgia, serif",
              letterSpacing: "3px",
              marginBottom: "12px",
              color: "#1a1a1a"
            }}>
              {product.name}
            </h1>

            <p style={{
              fontSize: "24px",
              fontFamily: "Georgia, serif",
              color: "#d97706",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              ${product.price}
            </p>

            <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
              {product.desc}
            </p>

            <button
              onClick={() => addToCart({ id: 1, name: product.name, price: product.price })}
              style={{
                width: "100%",
                padding: "18px",
                backgroundColor: "#d97706",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                letterSpacing: "2px",
                fontFamily: "Georgia, serif",
                cursor: "pointer",
                marginBottom: "30px"
              }}>
              ADD TO CART
            </button>

            <details style={{ borderTop: "1px solid #e5e5e5", padding: "20px 0" }}>
              <summary style={{ fontSize: "13px", letterSpacing: "1.5px", cursor: "pointer", color: "#1a1a1a", fontWeight: "500" }}>
                DESCRIPTION
              </summary>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginTop: "12px" }}>
                {product.details}
              </p>
            </details>

            <details style={{ borderTop: "1px solid #e5e5e5", padding: "20px 0" }}>
              <summary style={{ fontSize: "13px", letterSpacing: "1.5px", cursor: "pointer", color: "#1a1a1a", fontWeight: "500" }}>
                MATERIALS & CARE
              </summary>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginTop: "12px" }}>
                {product.details}
              </p>
            </details>

            <details style={{ borderTop: "1px solid #e5e5e5", padding: "20px 0" }}>
              <summary style={{ fontSize: "13px", letterSpacing: "1.5px", cursor: "pointer", color: "#1a1a1a", fontWeight: "500" }}>
                SHIPPING & RETURNS
              </summary>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginTop: "12px" }}>
                Free worldwide shipping on all orders. 30-day return policy.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopPage() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "VIVID AURA JEWELS", price: 42, desc: "Gold ear cuff with crystal accent" },
    { id: 2, name: "MAJESTIC FLORA NECTAR", price: 68, desc: "Multicolor floral crystal necklace" },
    { id: 3, name: "GOLDEN SPHERE HUGGIES", price: 38, desc: "Chunky gold dome huggie earrings" },
    { id: 4, name: "AMBER LACE EARRINGS", price: 54, desc: "Textured gold filigree drop earrings" },
    { id: 5, name: "ROYAL HEIRLOOM SET", price: 95, desc: "Gift-boxed earring + necklace set" }
  ];

  return (
    <div style={{ backgroundColor: "#faf9f7", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 40px 80px" }}>
        <h1 style={{
          fontSize: "48px",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "4px"
        }}>
          SHOP ALL
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}>
              <a href={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{
                  height: "250px",
                  background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px"
                }}>
                  <span style={{ color: "#999", fontSize: "13px", textAlign: "center", padding: "10px" }}>
                    {product.name}
                  </span>
                </div>
              </a>
              <h3 style={{
                fontSize: "12px",
                fontFamily: "Georgia, serif",
                letterSpacing: "1.2px",
                marginBottom: "8px",
                color: "#1a1a1a"
              }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
                {product.desc}
              </p>
              <p style={{
                fontSize: "16px",
                fontFamily: "Georgia, serif",
                color: "#d97706",
                fontWeight: "600",
                marginBottom: "12px"
              }}>
                ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#d97706",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  cursor: "pointer"
                }}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  return (
    <CartProvider>
      <CartDrawer />
      {path.startsWith("/product/") ? <ProductDetail /> : path.startsWith("/shop") ? <ShopPage /> : <HomePage />}
    </CartProvider>
  );
}

export default App;
