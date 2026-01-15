import { Box, Typography, Card, CardContent, Rating, Button, TextField, Select, MenuItem, FormControl, InputLabel, Chip, Badge, Drawer, IconButton, Divider, Slider } from "@mui/material";
import { useState, useMemo } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";


const productsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=400&h=400&fit=crop',
    title: 'High-Performance Laptop',
    price: 999.99,
    originalPrice: 1299.99,
    rating: 4.5,
    reviews: 328,
    prime: true,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    title: 'Wireless Mouse',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.2,
    reviews: 156,
    prime: true,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1587829191301-72d440643117?w=400&h=400&fit=crop',
    title: 'Mechanical Gaming Keyboard',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 512,
    prime: true,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    title: '4K Ultra HD Monitor',
    price: 399.99,
    originalPrice: 599.99,
    rating: 4.4,
    reviews: 287,
    prime: false,
    inStock: true,
    category: 'Electronics',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    title: 'Noise-Cancelling Headphones',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 891,
    prime: true,
    inStock: true,
    category: 'Audio',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    title: 'Fast Charging Power Bank',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviews: 234,
    prime: true,
    inStock: true,
    category: 'Accessories',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98adc3b27?w=400&h=400&fit=crop',
    title: 'USB-C Cable (2m)',
    price: 12.99,
    originalPrice: 24.99,
    rating: 4.1,
    reviews: 445,
    prime: true,
    inStock: true,
    category: 'Accessories',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1598901881269-14ca0b2a5f43?w=400&h=400&fit=crop',
    title: 'HD Webcam with Microphone',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 678,
    prime: true,
    inStock: false,
    category: 'Electronics',
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card
      sx={{ width: { xs: '250px', sm: '180px', md: '250px' },
        maxWidth: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid #bbb8b8ff',
        borderRadius: 1,
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: '#CC0C39',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 1,
            fontSize: '12px',
            fontWeight: 'bold',
            zIndex: 1,
          }}
        >
          {discount}% OFF
        </Box>
      )}

      {/* Product Image */}
      <Box
        sx={{
          width: '100%',
          height: 200,
          backgroundColor: '#f6f3f3ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: '10px',
          }}
        />
      </Box>


      {/* Product Details */}
      <CardContent sx={{ flex: 1, padding: '12px', paddingBottom: '8px' }}>
        {/* Title */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#0F1111',
            marginBottom: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.4,
            fontSize: '14px',
          }}
        >
          {product.title}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '8px' }}>
          <Rating
            value={product.rating}
            readOnly
            size="small"
            sx={{ fontSize: '14px' }}
          />
          <Typography
            variant="caption"
            sx={{
              color: '#0066C0',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {product.reviews}
          </Typography>
        </Box>

        {/* Price Section */}
        <Box sx={{ marginBottom: '8px' }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#B12704',
              }}
            >
              ₦{product.price.toLocaleString()}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                textDecoration: 'line-through',
              }}
            >
              ₦{product.originalPrice.toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* Stock Status */}
        <Typography
          variant="caption"
          sx={{
            color: product.inStock ? '#007600' : '#CC0C39',
            fontWeight: 600,
            fontSize: '12px',
            marginBottom: '12px',
          }}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <Box sx={{ padding: '12px', paddingTop: 0 }}>
        <Button
          variant="contained"
          fullWidth
          disabled={!product.inStock}
          onClick={() => onAddToCart(product)}
          sx={{
            backgroundColor: '#FFD814',
            color: '#0F1111',
            border: '1px solid #FCD34D',
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '13px',
            padding: '8px 0',
            '&:hover': {
              backgroundColor: product.inStock ? '#F7CA00' : '#FFD814',
            },
            '&:disabled': {
              backgroundColor: '#ccc',
              color: '#666',
              cursor: 'not-allowed',
            },
          }}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </Box>
    </Card>
  );
};

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        padding: 2,
        borderBottom: '1px solid #eee',
      }}
    >
      <Box
        component="img"
        src={item.image}
        sx={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
        }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, marginBottom: 1 }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#B12704', fontWeight: 'bold' }}>
          ₦{item.price.toLocaleString()}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: '1px solid #ddd', borderRadius: 1 }}>
          <IconButton
            size="small"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            sx={{ padding: 0.5 }}
          >
            <RemoveIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <Typography sx={{ minWidth: 30, textAlign: 'center', fontSize: '14px' }}>
            {item.quantity}
          </Typography>
          <IconButton
            size="small"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            sx={{ padding: 0.5 }}
          >
            <AddIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
        <IconButton
          size="small"
          onClick={() => onRemove(item.id)}
          sx={{ color: '#CC0C39' }}
        >
          <DeleteIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default function Cards() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [minRating, setMinRating] = useState(0);

  // Get unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => b.id - a.id);
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, priceRange, minRating, sortBy]);

  // Cart functions
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Sidebar Filters */}
      <Box
        sx={{
          width: 250,
          backgroundColor: 'white',
          padding: 3,
          borderRight: '1px solid #ddd',
          overflowY: 'auto',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2, fontSize: '16px' }}>
          Filters
        </Typography>

        {/* Category Filter */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 1 }}>
            Category
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {categories.map(cat => (
              <Chip
                key={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? 'filled' : 'outlined'}
                sx={{
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #141452ff 0%, #1f1e8aff 100%)' : 'transparent',
                  color: selectedCategory === cat ? 'white' : '#333',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  border: selectedCategory === cat ? 'none' : '1px solid #ddd',
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ marginBottom: 3 }} />

        {/* Price Filter */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Price Range: ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
          </Typography>
          <Slider
            range
            min={0}
            max={1500}
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            sx={{
              '& .MuiSlider-thumb': {
                backgroundColor:  '#141452ff',
              },
              '& .MuiSlider-track': {
                backgroundColor:  '#141452ff',
              },
            }}
          />
        </Box>

        <Divider sx={{ marginBottom: 3 }} />

        {/* Rating Filter */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 1 }}>
            Min Rating
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[0, 2, 3, 4].map(rating => (
              <Chip
                key={rating}
                label={rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                onClick={() => setMinRating(rating)}
                variant={minRating === rating ? 'filled' : 'outlined'}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#141452ff',
                    color: 'white',
                  },

                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header with Title */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #141452ff 0%, #1f1e8aff 100%)',
            color: 'white',
            padding: { xs: 2, md: 3 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Shop Our Products
          </Typography>
          
          <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Cart Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, borderBottom: '1px solid #ddd' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Shopping Cart ({cart.length})
            </Typography>
            <IconButton onClick={() => setCartOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Cart Items */}
          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            {cart.length === 0 ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
                <Typography>Your cart is empty</Typography>
              </Box>
            ) : (
              cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveFromCart}
                />
              ))
            )}
          </Box>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <Box sx={{ borderTop: '1px solid #ddd', padding: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography>₦{subtotal.toLocaleString('en-NG', {maximumFractionDigits: 2})}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography>Tax (10%):</Typography>
                <Typography>₦{tax.toLocaleString('en-NG', {maximumFractionDigits: 2})}</Typography>
              </Box>
              <Divider sx={{ marginBottom: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Total:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#B12704' }}>
                  ₦{total.toLocaleString('en-NG', {maximumFractionDigits: 2})}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#FFA724',
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'none',
                  padding: 1.5,
                  marginBottom: 1,
                  '&:hover': {
                    backgroundColor: '#FF9500',
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
        </Box>

        {/* Top Bar with Search and Cart */}
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 2,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Search */}
          <TextField
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1, color: '#999' }} />,
            }}
            sx={{
              flex: 1,
              minWidth: { xs: '100%', md: 300 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: '#f5f5f5',
              },
            }}
          />

          {/* Sort */}
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
              <MenuItem value="rating">Highest Rated</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </FormControl>

          {/* Cart Button */}
          <IconButton
            onClick={() => setCartOpen(true)}
            sx={{
              position: 'relative',
              backgroundColor: '#FFD814',
              color: '#0F1111',
              padding: 1.5,
              '&:hover': {
                backgroundColor: '#F7CA00',
              },
            }}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

        {/* Products Grid */}
        <Box sx={{ flex: 1, padding: 3, overflowY: 'auto' }}>
          {filteredProducts.length === 0 ? (
            <Box sx={{ textAlign: 'center', padding: 4 }}>
              <Typography variant="h6" sx={{ color: '#666' }}>
                No products found
              </Typography>
            </Box>
          ) : (
            <>
              <Typography sx={{ marginBottom: 2, color: '#666', fontSize: '14px' }}>
                Showing {filteredProducts.length} products
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  },
                  gap: 2,
                }}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>

      
    </Box>
  );
}