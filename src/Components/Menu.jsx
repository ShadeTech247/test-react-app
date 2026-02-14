// Add some styling to make it look better:
function MenuItem({
  name = "item",
  description = "item description",
  price = 500,
  image = "https://via.placeholder.com/300",
  isVegetarian = true,
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 max-w-sm">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-600 font-bold text-lg">₦{price.toLocaleString()}</p>
      <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 ${
        isVegetarian ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {isVegetarian ? "🌱 Vegetarian" : "🍖 Non-Vegetarian"}
      </span>
    </div>
  );
}

function MenuSection({ title = "Menu Section", children }) {
  return (
    <section className="mb-8 p-6 bg-gray-50 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
}

// Pro tip: Store menu data in arrays for easier management
function Menu() {
    const desserts = [
        { name: "Vanilla Ice Cream", description: "Ice cream with vanilla flavor", price: 5000, image: "https://via.placeholder.com/300" },
        { name: "Chocolate Ice Cream", description: "Ice cream with Chocolate flavor", price: 4500, image: "https://via.placeholder.com/300" },
        { name: "Strawberry Ice Cream", description: "Ice cream with Strawberry flavor", price: 4500, image: "https://via.placeholder.com/300" }
    ];

    const appetizers = [
        { name: "Bread and Egg", description: "Delicious serving of fried egg with bread", price: 5000, isVegetarian: false },
        { name: "Cup of tea", description: "Warm creamy goodness in a cup", price: 4500, isVegetarian: true },
        { name: "Small chops", description: "An assortment of snacks guaranteed to make your mouth water", price: 4500, isVegetarian: false }
    ];

    return (
        <div className="container mx-auto p-4">
            <MenuSection title="🍰 Desserts">
                {desserts.map(item => (
                    <MenuItem key={item.name} {...item} />
                ))}
            </MenuSection>
            
            <MenuSection title="🍴 Appetizers">
                {appetizers.map(item => (
                    <MenuItem key={item.name} {...item} />
                ))}
            </MenuSection>
        </div>
    );
}

export default Menu;