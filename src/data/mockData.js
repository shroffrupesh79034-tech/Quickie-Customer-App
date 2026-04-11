export const VERTICALS = {
  FOOD: {
    id: 'food',
    name: 'Food',
    title: 'Order our best food',
    icon: '🍔',
    searchPrompts: ["Search 'Biryani'...", "Search 'Pizza'...", "Search 'Burgers'...", "Search 'Momos'...", "Search 'Cake'..."],
    offers: [
      { id: 1, title: '50% OFF', desc: 'On your first order today!', bg: 'linear-gradient(135deg, #FF4B2B, #FF416C)' },
      { id: 2, title: 'FREE DELIVERY', desc: 'Above orders of ₹199', bg: 'linear-gradient(135deg, #4776E6, #8E54E9)' },
      { id: 3, title: 'WEEKEND MANIA', desc: 'Extra 20% OFF on Shakes', bg: 'linear-gradient(135deg, #FDC830, #F37335)' },
      { id: 4, title: 'NIGHT OWL', desc: 'Special Deals after 11 PM', bg: 'linear-gradient(135deg, #232526, #414345)' },
      { id: 5, title: 'FAMILY MEALS', desc: 'Save more on Thalis', bg: 'linear-gradient(135deg, #00b09b, #96c93d)' }
    ],
    categories: [
      { id: 'burger', name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 'pizza', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
      { id: 'biryani', name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
      { id: 'thali', name: 'Thali', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
      { id: 'rolls', name: 'Rolls', image: 'https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?auto=format&fit=crop&w=400&q=80' },
      { id: 'paratha', name: 'Paratha', image: 'https://images.unsplash.com/photo-1631557960309-88031e670d8a?auto=format&fit=crop&w=400&q=80' },
      { id: 'sweets', name: 'Sweets', image: 'https://images.unsplash.com/photo-1630138220038-02488d30e386?auto=format&fit=crop&w=400&q=80' },
      { id: 'momos', name: 'Momos', image: 'https://images.unsplash.com/photo-1563245330-6d45903c7378?auto=format&fit=crop&w=400&q=80' },
      { id: 'cakes', name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
      { id: 'shakes', name: 'Shakes', image: 'https://images.unsplash.com/photo-1553784180-4302485711b3?auto=format&fit=crop&w=400&q=80' }
    ],
    products: [
      { id: 101, name: 'Zinger Burger', price: 189, shop: 'Burger Bros', category: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
      { id: 102, name: 'Margherita Pizza', price: 299, shop: 'Pizza Central', category: 'Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
      { id: 103, name: 'Hyderabadi Biryani', price: 320, shop: 'Biryani House', category: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
      { id: 104, name: 'North Indian Thali', price: 250, shop: 'Thali House', category: 'Thali', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80', rating: 4.2 },
      { id: 105, name: 'Paneer Roll', price: 120, shop: 'Roll Point', category: 'Rolls', image: 'https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
      { id: 106, name: 'Aloo Paratha', price: 80, shop: 'Paratha Junction', category: 'Paratha', image: 'https://images.unsplash.com/photo-1631557960309-88031e670d8a?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
      { id: 107, name: 'Gulab Jamun', price: 150, shop: 'Sweet Dreams', category: 'Sweets', image: 'https://images.unsplash.com/photo-1630138220038-02488d30e386?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
      { id: 108, name: 'Steamed Momos', price: 100, shop: 'Momo Station', category: 'Momos', image: 'https://images.unsplash.com/photo-1563245330-6d45903c7378?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
      { id: 109, name: 'Chocolate Cake', price: 450, shop: 'Cake Walk', category: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
      { id: 110, name: 'Strawberry Shake', price: 140, shop: 'Shake It Up', category: 'Shakes', image: 'https://images.unsplash.com/photo-1553784180-4302485711b3?auto=format&fit=crop&w=400&q=80', rating: 4.5 }
    ]
  },
  GROCERY: {
    id: 'grocery',
    name: 'Grocery',
    title: 'Shop Daily Groceries',
    icon: '🛒',
    searchPrompts: ["Search 'Milk'...", "Search 'Bread'...", "Search 'Eggs'...", "Search 'Oil'...", "Search 'Cookies'..."],
    offers: [
      { id: 1, title: 'MEGA SALE', desc: 'Flat 30% OFF on Pantry', bg: 'linear-gradient(135deg, #11998e, #38ef7d)' },
      { id: 2, title: 'DAIRY FRESH', desc: 'Milk & Eggs at best price', bg: 'linear-gradient(135deg, #FF9966, #ff5e62)' },
      { id: 3, title: 'SNACK ATTACK', desc: 'Buy 2 Get 1 FREE', bg: 'linear-gradient(135deg, #FFD200, #F7971E)' },
      { id: 4, title: 'CLEAN HOME', desc: 'Up to 40% OFF on Supplies', bg: 'linear-gradient(135deg, #00B4DB, #0083B0)' },
      { id: 5, title: 'MORNING STAR', desc: 'Fresh Bread Everyday', bg: 'linear-gradient(135deg, #8E2DE2, #4A00E0)' }
    ],
    categories: [
        { id: 'dairy', name: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-125581fe2f8d?auto=format&fit=crop&w=400&q=80' },
        { id: 'rice', name: 'Rice & Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
        { id: 'pulses', name: 'Pulses/Dal', image: 'https://images.unsplash.com/photo-1515942400420-2b98ef1f51ac?auto=format&fit=crop&w=400&q=80' },
        { id: 'oil', name: 'Cooking Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbff?auto=format&fit=crop&w=400&q=80' },
        { id: 'snacks', name: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659223-ef37659c9ba6?auto=format&fit=crop&w=400&q=80' },
        { id: 'bev', name: 'Beverages', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80' },
        { id: 'clean', name: 'Cleaning', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
        { id: 'personal', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' }
    ],
    products: [
        { id: 201, name: 'Fresh Milk', price: 60, shop: 'Amul Dairy', category: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-125581fe2f8d?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
        { id: 202, name: 'Basmati Rice', price: 120, shop: 'Rice Mart', category: 'Rice & Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
        { id: 203, name: 'Moong Dal', price: 110, shop: 'Pulse King', category: 'Pulses/Dal', image: 'https://images.unsplash.com/photo-1515942400420-2b98ef1f51ac?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
        { id: 204, name: 'Sunflower Oil', price: 180, shop: 'Oil Refined', category: 'Cooking Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbff?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
        { id: 205, name: 'Potato Chips', price: 20, shop: 'Snack House', category: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659223-ef37659c9ba6?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
        { id: 206, name: 'Orange Juice', price: 90, shop: 'Bev Hub', category: 'Beverages', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
        { id: 207, name: 'Floor Cleaner', price: 150, shop: 'Clean Slate', category: 'Cleaning', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
        { id: 208, name: 'Hand Wash', price: 80, shop: 'Care Free', category: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80', rating: 4.6 }
    ]
  },
  VEGGIES: {
    id: 'veggies',
    name: 'Veggies',
    title: 'Fresh Fruits & Veggies',
    icon: '🍅',
    searchPrompts: ["Search 'Tomatoes'...", "Search 'Onions'...", "Search 'Potato'...", "Search 'Mango'...", "Search 'Spinach'..."],
    offers: [
      { id: 1, title: 'FARM FRESH', desc: 'Harvested Today!', bg: 'linear-gradient(135deg, #FDC830, #F37335)' },
      { id: 2, title: 'ORGANIC DEAL', desc: 'Save 20% on Greens', bg: 'linear-gradient(135deg, #00b09b, #96c93d)' },
      { id: 3, title: 'FRUIT BASKET', desc: 'Assorted Seasonal Fruits', bg: 'linear-gradient(135deg, #614385, #516395)' },
      { id: 4, title: 'EXOTIC MIX', desc: 'Try something new today', bg: 'linear-gradient(135deg, #ee0979, #ff6a00)' },
      { id: 5, title: 'HERBAL LIFE', desc: 'Fresh Herbs for cooking', bg: 'linear-gradient(135deg, #02aab0, #00cdac)' }
    ],
    categories: [
      { id: 'fruits', name: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80' },
      { id: 'leafy', name: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
      { id: 'root', name: 'Root Veggies', image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad675?auto=format&fit=crop&w=400&q=80' },
      { id: 'exotic', name: 'Exotic Veggies', image: 'https://images.unsplash.com/photo-1566385101042-1a000c1267c4?auto=format&fit=crop&w=400&q=80' },
      { id: 'herbs', name: 'Herbs', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80' }
    ],
    products: [
        { id: 301, name: 'Apples', price: 160, shop: 'Fruit Garden', category: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
        { id: 302, name: 'Spinach', price: 30, shop: 'Green Farm', category: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
        { id: 303, name: 'Potatoes', price: 40, shop: 'Root Store', category: 'Root Veggies', image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad675?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
        { id: 304, name: 'Broccoli', price: 90, shop: 'Exotic Green', category: 'Exotic Veggies', image: 'https://images.unsplash.com/photo-1566385101042-1a000c1267c4?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
        { id: 305, name: 'Coriander', price: 10, shop: 'Herb Garden', category: 'Herbs', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80', rating: 4.6 }
    ]
  },
  MEDICINE: {
    id: 'medicine',
    name: 'Medicine',
    title: 'Pharmacy & Essentials',
    icon: '💊',
    searchPrompts: ["Search 'Paracetamol'...", "Search 'Syrup'...", "Search 'First Aid'...", "Search 'Vitamins'...", "Search 'BP Monitor'..."],
    offers: [
      { id: 1, title: 'HEALTH CARE', desc: 'First Aid Essentials', bg: 'linear-gradient(135deg, #3a7bd5, #3a6073)' },
      { id: 2, title: 'WELLNESS', desc: 'Vitamins & More', bg: 'linear-gradient(135deg, #f85032, #e73827)' },
      { id: 3, title: 'COLD RELIEF', desc: 'Breathe Easy Today', bg: 'linear-gradient(135deg, #000046, #1cb5e0)' },
      { id: 4, title: 'STOMACH CARE', desc: 'Safe & Effective Relief', bg: 'linear-gradient(135deg, #1d976c, #93f9b9)' },
      { id: 5, title: 'VITALITY', desc: 'Strength & Nutrition', bg: 'linear-gradient(135deg, #eb3349, #f45c43)' }
    ],
    categories: [
      { id: 'fever', name: 'Fever', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80' },
      { id: 'pain', name: 'Pain Relief', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80' },
      { id: 'cold', name: 'Cold and Cough', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
      { id: 'stomach', name: 'Stomach Care', image: 'https://images.unsplash.com/photo-1576602976047-174df57a43af?auto=format&fit=crop&w=400&q=80' },
      { id: 'diabetes', name: 'Diabetes', image: 'https://images.unsplash.com/photo-1505575967455-4a82cf897392?auto=format&fit=crop&w=400&q=80' },
      { id: 'bp', name: 'Blood Pressure', image: 'https://images.unsplash.com/photo-1610339674844-4820dc738f71?auto=format&fit=crop&w=400&q=80' },
      { id: 'vitamins', name: 'Vitamins', image: 'https://images.unsplash.com/photo-1471864190281-ad5f9f8162e6?auto=format&fit=crop&w=400&q=80' },
      { id: 'firstaid', name: 'First Aid', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f08?auto=format&fit=crop&w=400&q=80' },
      { id: 'syrups', name: 'Syrups', image: 'https://images.unsplash.com/photo-1550573104-1f76ee736db3?auto=format&fit=crop&w=400&q=80' }
    ],
    products: [
        { id: 401, name: 'Paracetamol', price: 30, shop: 'Apollo', category: 'Fever', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
        { id: 402, name: 'Ibuprofen', price: 50, shop: 'MedPlus', category: 'Pain Relief', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
        { id: 403, name: 'Cough Syrup', price: 90, shop: 'City Pharma', category: 'Cold and Cough', image: 'https://images.unsplash.com/photo-1550573104-1f76ee736db3?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
        { id: 404, name: 'Antacid', price: 45, shop: 'Heal Care', category: 'Stomach Care', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
        { id: 405, name: 'Glucometer', price: 1200, shop: 'Sugar Free', category: 'Diabetes', image: 'https://images.unsplash.com/photo-1505575967455-4a82cf897392?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
        { id: 406, name: 'BP Monitor', price: 2500, shop: 'Heart Care', category: 'Blood Pressure', image: 'https://images.unsplash.com/photo-1610339674844-4820dc738f71?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
        { id: 407, name: 'Vitamin C', price: 120, shop: 'Vitality', category: 'Vitamins', image: 'https://images.unsplash.com/photo-1471864190281-ad5f9f8162e6?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
        { id: 408, name: 'Bandages', price: 20, shop: 'Safety First', category: 'First Aid', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f08?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
        { id: 409, name: 'Digestive Syrup', price: 85, shop: 'Stomach Ease', category: 'Syrups', image: 'https://images.unsplash.com/photo-1550573104-1f76ee736db3?auto=format&fit=crop&w=400&q=80', rating: 4.5 }
    ]
  }
};
